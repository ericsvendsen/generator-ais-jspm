import angular from 'angular';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ngRoute from 'angular-route';

import appComponents from './components/index.js';
import appPages from './pages/index.js';
import appModels from './models/index.js';
import appServices from './services/index.js';

import './app.scss!';

var app = angular.module('<%=ngapp%>', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'appComponents',
    'appPages',
    'appModels',
    'appServices'
]);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'homeController',
                controllerAs: 'vm',
                templateUrl: 'modules/pages/home/home.template.html'
            })
            .when('/about', {
                controller: 'aboutController',
                controllerAs: 'vm',
                templateUrl: 'modules/pages/about/about.template.html'
            })
            .when('/contact', {
                controller: 'contactController',
                controllerAs: 'vm',
                templateUrl: 'modules/pages/contact/contact.template.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .value('moment', window.moment)
    .value('_', window._)
    .value('$', window.$);