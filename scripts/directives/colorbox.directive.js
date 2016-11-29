
angular.module('aventuraApp')
    .directive('colorbox', function() {
        'use strict';

        return {
            restrict: 'AC',
            link: function (scope, element, attrs) {
                $(element).colorbox({
                    href: attrs.colorbox,
                    maxWidth: '95%',
                    maxHeight: '95%'
                });
            }
        };
    });