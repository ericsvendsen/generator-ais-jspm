import angular from 'angular';
import ngRoute from 'angular-route';
import ngSanitize from 'angular-sanitize';

import appComponents from './components/index.js';
import appPages from './pages/index.js';
import appModels from './models/index.js';
import appServices from './services/index.js';

import './app.scss!';

let app = angular.module('<%=ngapp%>', [
    'ngRoute',
    'ngSanitize',
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
                templateUrl: './app/pages/home/home.template.html'
            })
            .when('/about', {
                controller: 'aboutController',
                controllerAs: 'vm',
                templateUrl: './app/pages/about/about.template.html'
            })
            .when('/contact', {
                controller: 'contactController',
                controllerAs: 'vm',
                templateUrl: './app/pages/contact/contact.template.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .value('moment', window.moment)
    .value('_', window._)
    .value('$', window.$);