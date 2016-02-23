import angular from 'angular';

import AboutController from './about/about.controller.js';
import ContactController from './contact/contact.controller.js';
import HomeController from './home/home.controller.js';

angular.module('<%=appId%>.pages.aboutController', []).controller('aboutController', [AboutController]);
angular.module('<%=appId%>.pages.contactController', []).controller('contactController', [ContactController]);
angular.module('<%=appId%>.pages.homeController', []).controller('homeController', [HomeController]);

angular.module('appPages', [
    '<%=appId%>.pages.aboutController',
    '<%=appId%>.pages.contactController',
    '<%=appId%>.pages.homeController'
]);