angular.module('aventuraApp')
    .controller('LanguageController', function ($scope, $rootScope, $translate, Language) {
        'use strict';
        $scope.changeLanguage = function (languageKey) {
            $translate.use(languageKey);
            $scope.$emit('languageChanged');
            // Scroll to top of body
            $('body,html').animate({scrollTop : 0}, 500);
        };

        Language.getAll().then(function (languages) {
            $scope.languages = languages;
        });
    });