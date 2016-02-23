import angular from 'angular';

import FooterController from './footer/footer.controller.js';
import FooterDirective from './footer/footer.directive.js';
import HeaderController from './header/header.controller.js';
import HeaderDirective from './header/header.directive.js';
import NavigationController from './navigation/navigation.controller.js';
import NavigationDirective from './navigation/navigation.directive.js';

angular.module('<%=appId%>.components.footerController', []).controller('footerController', [FooterController]);
angular.module('<%=appId%>.components.footerDirective', []).directive('appFooter', [FooterDirective]);
angular.module('<%=appId%>.components.headerController', []).controller('headerController', [HeaderController]);
angular.module('<%=appId%>.components.headerDirective', []).directive('appHeader', [HeaderDirective]);
angular.module('<%=appId%>.components.navigationController', []).controller('navigationController', [NavigationController]);
angular.module('<%=appId%>.components.navigationDirective', []).directive('appNavigation', [NavigationDirective]);

angular.module('appComponents', [
    '<%=appId%>.components.footerController',
    '<%=appId%>.components.footerDirective',
    '<%=appId%>.components.headerController',
    '<%=appId%>.components.headerDirective',
    '<%=appId%>.components.navigationController',
    '<%=appId%>.components.navigationDirective'
]);