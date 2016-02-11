import angular from 'angular';

import FooterController from './footer/footer.controller.js';
import FooterDirective from './footer/footer.directive.js';
import HeaderController from './header/header.controller.js';
import HeaderDirective from './header/header.directive.js';
import NavigationController from './navigation/navigation.controller.js';
import NavigationDirective from './navigation/navigation.directive.js';

angular.module('<%=ngapp%>.components.footerController', []).controller('footerController', FooterController);
angular.module('<%=ngapp%>.components.footerDirective', []).directive('appFooter', FooterDirective);
angular.module('<%=ngapp%>.components.headerController', []).controller('headerController', HeaderController);
angular.module('<%=ngapp%>.components.headerDirective', []).directive('appHeader', HeaderDirective);
angular.module('<%=ngapp%>.components.navigationController', []).controller('navigationController', NavigationController);
angular.module('<%=ngapp%>.components.navigationDirective', []).directive('appNavigation', NavigationDirective);

angular.module('appComponents', [
    '<%=ngapp%>.components.footerController',
    '<%=ngapp%>.components.footerDirective',
    '<%=ngapp%>.components.headerController',
    '<%=ngapp%>.components.headerDirective',
    '<%=ngapp%>.components.navigationController',
    '<%=ngapp%>.components.navigationDirective'
]);