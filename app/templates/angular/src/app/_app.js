import angular from 'angular';
import ngRoute from 'angular-route';
import ngSanitize from 'angular-sanitize';

import appComponents from './components/index.js';
import appPages from './pages/index.js';
import appModels from './models/index.js';
import appServices from './services/index.js';

import 'bootstrap/css/bootstrap.css!';
import './app.scss!';

import homeTemplate from './pages/home/home.template.html!text';
import aboutTemplate from './pages/about/about.template.html!text';
import contactTemplate from './pages/contact/contact.template.html!text';

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
                template: homeTemplate
            })
            .when('/about', {
                controller: 'aboutController',
                controllerAs: 'vm',
                template: aboutTemplate
            })
            .when('/contact', {
                controller: 'contactController',
                controllerAs: 'vm',
                template: contactTemplate
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .value('moment', window.moment)
    .value('_', window._)
    .value('$', window.$);