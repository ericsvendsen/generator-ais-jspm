import angular from 'angular';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ngRoute from 'angular-route';

import appComponents from './components/index.js';
import appPages from './pages/index.js';

var app = angular.module('<%=ngapp%>', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'appComponents',
    'appPages'
]);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'homeController',
                templateUrl: 'modules/pages/home/home.template.html'
            })
            .when('/about', {
                controller: 'aboutController',
                templateUrl: 'modules/pages/about/about.template.html'
            })
            .when('/contact', {
                controller: 'contactController',
                templateUrl: 'modules/pages/contact/contact.template.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .value('moment', window.moment)
    .value('_', window._)
    .value('$', window.$);