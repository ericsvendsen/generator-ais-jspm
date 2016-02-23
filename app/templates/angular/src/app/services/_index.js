import angular from 'angular';

import appService from './app.service.js';

angular.module('<%=appId%>.services.appService', []).service('appService', [appService]);

angular.module('appServices', [
    '<%=appId%>.services.appService'
]);