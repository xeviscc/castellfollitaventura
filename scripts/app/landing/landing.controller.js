angular.module('aventuraApp')
    .controller('LandingController', function ($timeout,$scope,$rootScope,$translate,STATIC_URL) {
        'use strict';

        function localizedTitle() {
            $rootScope.currentPageName = $translate.instant('landing.titol');
        }
        localizedTitle();
        $rootScope.$on('languageChanged', localizedTitle);

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
                { href: "/escaperoom", petita: STATIC_URL+"images/landing/room_escape_210_" + lang + ".jpg", title: "Room Escape", alt: "Room Escape" },
                { href: "/townescape", petita: STATIC_URL+"images/landing/town_escape_210_" + lang + ".jpg", title: "Town Escape", alt: "Town Escape" },
                { href: "/enigmistica", petita: STATIC_URL+"images/landing/enigmistica_digital_210_" + lang + ".jpg", title: "Enigmística Digital", alt: "Enigmística Digital" },
                { href: "/paintball", petita: STATIC_URL+"images/landing/paintball_210_" + lang + ".jpg", title: "Paintball", alt: "Paintball" },
                { href: "/townescapejunior", petita: STATIC_URL+"images/landing/town_escape_junior_210_" + lang + ".jpg", title: "Town Escape Junior", alt: "Town Escape Junior" },
                { href: "/paintball7", petita: STATIC_URL+"images/landing/paintball7_210_" + lang + ".jpg", title: "Paintball +7", alt: "Paintball +7" },
                { href: "/escaperoomdomicili", petita: STATIC_URL+"images/landing/room_escape_domicili_210_" + lang + ".jpg", title: "Room Escape a Domicili", alt: "Room Escape a Domicili" },
                { href: "/orientacio", petita: STATIC_URL+"images/landing/orientacio_210_" + lang + ".jpg", title: "Orientació", alt: "Orientació" },
                { href: "/senderisme", petita: STATIC_URL+"images/landing/senderisme_210_" + lang + ".jpg", title: "Senderisme", alt: "Senderisme" },
                { href: "/bicicletese", petita: STATIC_URL+"images/landing/btt_210_" + lang + ".jpg", title: "BTT Elèctrica", alt: "BTT Elèctrica" },
                { href: "/segway", petita: STATIC_URL+"images/landing/segway_210_" + lang + ".jpg", title: "Segway", alt: "Segway" }
                //{ href: "/buggies", petita: STATIC_URL+"images/landing/buggies_210_" + lang + ".jpg", title: "Buggies", alt: "Buggies" },
                //{ href: "/gloubs", petita: STATIC_URL+"images/landing/gloubs_210_" + lang + ".jpg", title: "Globus", alt: "Globus" }
                //{ href: "/gimcanabtt", petita: STATIC_URL+"images/landing/gimcana_btt_210_" + lang + ".jpg", title: "Gimcana BTT", alt: "Gimcana BTT" },
            ];
        }

        localizedImages();
        $rootScope.$on('languageChanged', localizedImages);


    }
);

