// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

angular.module('aventuraApp', ['ui.router', 'pascalprecht.translate', 'tmh.dynamicLocale',
    'ngCookies', 'ngAnimate', 'vcRecaptcha', 'angular-cookie-law', 'jkuri.calendar'])

    .run(function ($rootScope, $location, $http, $state, $translate, Language, ENV, VERSION, $window) {
        'use strict';

        //INIT GOOGLE ANALYTICS
        $window.ga('create', 'UA-74035844-1', 'auto');

        $rootScope.ENV = ENV;
        $rootScope.VERSION = VERSION;
        $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
            $rootScope.toState = toState;
            $rootScope.toStateParams = toStateParams;

            // Update the language
            Language.getCurrent().then(function (language) {
                $translate.use(language);
            });
        });

        $rootScope.$on('$stateChangeSuccess',  function(event, toState, toParams, fromState, fromParams) {
            $rootScope.previousStateName = fromState.name;
            $rootScope.previousStateParams = fromParams;
            $rootScope.currentPath = $location.path();
            //TRIGGER GOOGLE ANALYTCS EVENT.
            $window.ga('send', 'pageview', $location.path());
            // Scroll to top of body
            $('body,html').animate({scrollTop : 0}, 500);
        });

        $rootScope.back = function() {
            // If previous state is 'activate' or do not exist go to 'catalogue'
            if ($rootScope.previousStateName === 'activate' || $state.get($rootScope.previousStateName) === null) {
                //$state.go('home');
                $state.go('landing');
            } else {
                $state.go($rootScope.previousStateName, $rootScope.previousStateParams);
            }
        };
    })
    
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $translateProvider,
                      tmhDynamicLocaleProvider) {
        'use strict';

        //enable CSRF
        $httpProvider.defaults.xsrfCookieName = 'CSRF-TOKEN';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';

        $urlRouterProvider.otherwise('/');
        $stateProvider.state('site', {
            abstract: true,
            views: {
                'header@': {
                    templateUrl: 'scripts/app/header/header.html',
                    controller: 'HeaderController'
                },
                'sidebar@': {
                    templateUrl: 'scripts/app/sidebar/sidebar.html',
                    controller: 'SidebarController'
                },
                'menu@': {
                    templateUrl: 'scripts/app/menu/menu.html',
                    controller: 'MenuController'
                },
                'sidebar_r@': {
                    templateUrl: 'scripts/app/sidebar_r/sidebar_r.html',
                    controller: 'SidebarRController'
                },
                'footer@': {
                    templateUrl: 'scripts/app/footer/footer.html',
                    controller: 'FooterController'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }

        });

        // Initialize angular-translate
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: 'i18n/{lang}/{part}.json'
        });

        $translateProvider.preferredLanguage('ca');
        $translateProvider.fallbackLanguage('ca');
        $translateProvider.useCookieStorage();
        $locationProvider.html5Mode(true);

        tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
        tmhDynamicLocaleProvider.useCookieStorage('NG_TRANSLATE_LANG_KEY');
    });
