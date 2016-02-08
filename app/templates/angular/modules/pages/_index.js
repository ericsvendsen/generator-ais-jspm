import angular from 'angular';

import AboutController from './about/about.controller.js';
import ContactController from './contact/contact.controller.js';
import HomeController from './home/home.controller.js';

angular.module('<%=ngapp%>.pages.aboutController', []).controller('aboutController', [AboutController]);
angular.module('<%=ngapp%>.pages.contactController', []).controller('contactController', [ContactController]);
angular.module('<%=ngapp%>.pages.homeController', []).controller('homeController', [HomeController]);

angular.module('appPages', [
    '<%=ngapp%>.pages.aboutController',
    '<%=ngapp%>.pages.contactController',
    '<%=ngapp%>.pages.homeController'
]);