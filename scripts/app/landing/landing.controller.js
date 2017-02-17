angular.module('aventuraApp')
    .controller('LandingController', function ($timeout, $scope, $rootScope, $translate, STATIC_URL) {
        'use strict';

        $timeout(function() {
            $scope.$parent.$broadcast('show_collaboradors', true);
            $scope.$parent.$broadcast('hide_menu', 'all');
        }, 100);


        function localizedImages() {
            var lang = $translate.use();
            if(lang==null || lang==undefined) {
                lang = 'ca';
            }
            $scope.fotos = [
                { href: "/paintball", petita: STATIC_URL+"images/landing/paintball_210_" + lang + ".jpg", title: "Paintball", alt: "Paintball" },
                { href: "/escaperoom", petita: STATIC_URL+"images/landing/room_escape_210_" + lang + ".jpg", title: "Room Escape", alt: "Room Escape" },
                { href: "/senderisme", petita: STATIC_URL+"images/landing/senderisme_210_" + lang + ".jpg", title: "Senderisme", alt: "Senderisme" },
                { href: "/bicicletese", petita: STATIC_URL+"images/landing/btt_210_" + lang + ".jpg", title: "BTT Elèctrica", alt: "BTT Elèctrica" },
                { href: "/segway", petita: STATIC_URL+"images/landing/segway_210_" + lang + ".jpg", title: "Segway", alt: "Segway" },
                { href: "/buggies", petita: STATIC_URL+"images/landing/buggies_210_" + lang + ".jpg", title: "Buggies", alt: "Buggies" }
            ];
        }

        localizedImages();
        $rootScope.$on('languageChanged', localizedImages);


    }
);

