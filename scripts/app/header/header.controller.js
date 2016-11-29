angular.module('aventuraApp')
    .controller('HeaderController', function ($state, $scope, $translate, $rootScope,STATIC_URL) {
        'use strict';

        function localizedImages() {
            var lang = $translate.use();
            if(lang==null || lang==undefined) {
                lang = 'ca';
            }
            if (screen.width <= 640) { //mobil
                $scope.images = [{
                    src: STATIC_URL+'images/promo/paintball_18E_' + lang + '.jpg',
                    title: 'Paintball',
                    width: '100%',
                    height: '120',
                    href: 'paintball'
                }, {
                    src: STATIC_URL+'images/promo/rutes_btte_30E_' + lang + '.jpg',
                    title: 'Rutes BBT-E',
                    width: '100%',
                    height: '120',
                    href: 'bicicletese'
                }];
            } else {
                $scope.images = [{ //pc
                    src: STATIC_URL+'images/promo/paintball_18E_' + lang + '.jpg',
                    title: 'Paintball',
                    width: '100%',
                    height: '80',
                    href: 'paintball'
                }, {
                    src: STATIC_URL+'images/promo/rutes_btte_30E_' + lang + '.jpg',
                    title: 'Rutes BBT-E',
                    width: '100%',
                    height: '80',
                    href: 'bicicletese'
                }];
            }
        }

        localizedImages();
        $rootScope.$on('languageChanged', localizedImages);

    }
);
