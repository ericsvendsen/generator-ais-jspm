// angular
import angular from 'angular';
import ngRoute from 'angular-route';
import ngSanitize from 'angular-sanitize';

// app modules
import appComponents from './components/index.js';
import appConfig from './app.config.js';
import appPages from './pages/index.js';
import appModels from './models/index.js';
import appServices from './services/index.js';

// app route templates
import homeTemplate from './pages/home/home.template.html!text';
import aboutTemplate from './pages/about/about.template.html!text';
import contactTemplate from './pages/contact/contact.template.html!text';

// app styles
import 'bootstrap/css/bootstrap.css!';
import 'font-awesome/css/font-awesome.css!';
import './app.scss!';

// main app module
let app = angular.module('<%=ngapp%>', [
    'ngRoute',
    'ngSanitize',
    'appConfig',
    'appComponents',
    'appPages',
    'appModels',
    'appServices'
]);

// app routing
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