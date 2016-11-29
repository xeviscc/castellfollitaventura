<?php
    require_once("Rest.inc.php");
    require_once("apiRedsys.php");

    class API extends REST {
        public $data = "";

        const DB_SERVER = "127.0.0.1";
        const DB_USER = "root";
        const DB_PASSWORD = "";
        const DB = "angularcode_customer";

        private $db = NULL;
        private $mysqli = NULL;
        public function __construct(){
            parent::__construct(); // Init parent contructor
            //$this->dbConnect(); // Initiate Database connection
        }

        /*
        * Connect to Database
        */
        private function dbConnect(){
            $this->mysqli = new mysqli(self::DB_SERVER, self::DB_USER, self::DB_PASSWORD, self::DB);
        }

        /*
        * Dynmically call the method based on the query string
        */
        public function processApi(){
            //$func = strtolower(trim(str_replace("/","",$_REQUEST['x'])));
            $func = explode('/api/', $_SERVER["REQUEST_URI"])[1];
            //$actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
            //echo $actual_link;
            //echo "GET GET ". explode('/api/', $_SERVER[REQUEST_URI])[1];

            if((int)method_exists($this,$func) > 0)
                $this->$func();
            else
                $this->response('',404); // If the method not exist with in this class "Page not found".
        }

        private function mail(){
            $inputJSON = file_get_contents('php://input');
            $input = json_decode( $inputJSON, TRUE );

            $to      = 'oci@castellfollitaventura.cat';

            $subject = 'Nou missatge de castellfollitavenura.cat Pàgina: ' . $input['page'];

            $headers = "From: " . $input['email'] . "\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

            $message = "<html>
                        <body>
                        <p>Hola Castellfollit Aventura SL,</p>
                        <p>Tens un nou missatge de la pàgina web.</p>
                        <p>
                        <ul>";
            if(isset($input['nom'])){
                $message .= "<li><b>Nom: </b>" . $input['nom'] . "</li>";
            }
            if(isset($input['email'])){
                $message .= "<li><b>Mail: </b>" . $input['email'] . "</li>";
            }
            if(isset($input['telefon'])){
                $message .= "<li><b>Telèfon: </b>" . $input['telefon'] . "</li>";
            }
            if(isset($input['empresa'] )){
                $message .= "<li><b>Empresa: </b>" . $input['empresa'] . "</li>";
            }
            if(isset($input['page'])){
                $message .= "<li><b>Pàgina: </b>" . $input['page'] . "</li>";
            }
            if(isset($input['preu'])){
                $message .= "<li><b>Preu: </b>" . $input['preu'] . "</li>";
            }
            if(isset($input['assumpte'])){
                $message .= "<li><b>Assumpte: </b>" . $input['assumpte'] . "</li>";
            }

            $message .="</ul>
                        </p>
                        <p>Missatge:</p>
                        <p><i>" . $input['missatge'] . "</i></p>
                        </body>
                        </html>";

            mail($to, $subject, $message, $headers);
            $this->response("{ \"message\": \"Correu electrònic enviat satisfactoriament\" }", 200); // All went ok.
        }

        private function recepcio(){
            // Se crea Objeto
            $miObj = new RedsysAPI;
            $message = "";


            if (!empty( $_POST ) ) {//URL DE RESP. ONLINE

                $version = $_POST["Ds_SignatureVersion"];
                $datos = $_POST["Ds_MerchantParameters"];
                $signatureRecibida = $_POST["Ds_Signature"];


                $decodec = $miObj->decodeMerchantParameters($datos);
                $kc = 'sq7HjrUOBfKmC576ILgskD5srU870gJ7'; //Clave recuperada de CANALES
                $firma = $miObj->createMerchantSignatureNotif($kc,$datos);

                if ($firma === $signatureRecibida){
                    $message = "FIRMA OK";
                } else {
                    $message = "FIRMA KO";
                }
            }

            $this->response("{ \"message\": $message }", 200); // All went ok.
        }

        private function pagament(){
            $inputJSON = file_get_contents('php://input');
            $input = json_decode( $inputJSON, TRUE );
            $amount="0";//En centims
            if(isset($input['amount'])){
                $amount="14500";//En centims
            }

            // Se crea Objeto
            $miObj = new RedsysAPI;

            // Valores de entrada
            $merchantcode="91358382";
            $terminal="001";
            $currency="978";//EURO
            $trans="0";
            $url="https://sis-t.redsys.es:25443/sis/realizarPago";
            $urlOK="http://target.ca.cat/entorn";
            $urlKO="http://target.ca.cat/contacte";
            $id=time();


            // Se Rellenan los campos
            $miObj->setParameter("DS_MERCHANT_AMOUNT",$amount);
            $miObj->setParameter("DS_MERCHANT_ORDER",strval($id));
            $miObj->setParameter("DS_MERCHANT_MERCHANTCODE",$merchantcode);
            $miObj->setParameter("DS_MERCHANT_CURRENCY",$currency);
            $miObj->setParameter("DS_MERCHANT_TRANSACTIONTYPE",$trans);
            $miObj->setParameter("DS_MERCHANT_TERMINAL",$terminal);
            $miObj->setParameter("DS_MERCHANT_MERCHANTURL",$url);
            $miObj->setParameter("DS_MERCHANT_URLOK",$urlOK);
            $miObj->setParameter("DS_MERCHANT_URLKO",$urlKO);

            //Datos de configuración
            $version="HMAC_SHA256_V1";
            $kc = 'sq7HjrUOBfKmC576ILgskD5srU870gJ7';//Clave recuperada de CANALES

            // Se generan los parámetros de la petición
            $request = "";
            $params = $miObj->createMerchantParameters();
            $signature = $miObj->createMerchantSignature($kc);

            $message = "<form action=\"$url\" method=\"POST\" >";
            $message .= "<input name=\"Ds_SignatureVersion\" value=\"$version\" hidden/>";
            $message .= "<input name=\"Ds_MerchantParameters\" value=\"$params\" hidden/>";
            $message .= "<input name=\"Ds_Signature\" value=\"$signature\" hidden/>";
            $message .= "</form>";
            echo $message;

            die('<script>document.forms[0].submit();</script>');
        }

        private function customers(){
            echo "INSIDE customers";
        }

        private function insertCustomer(){
            echo "INSIDE insertCustomer";
        }

        private function updateCustomer(){
            echo "INSIDE updateCustomer";
        }

        private function deleteCustomer(){
            echo "INSIDE deleteCustomer";
        }

        /*
        * Encode array into JSON
        */
        private function json($data){
            if(is_array($data)){
                return json_encode($data);
            }
        }
    }

    // Initiiate Library

    $api = new API;
    $api->processApi();
?>