import angular from 'angular';

import appService from './app.service.js';

angular.module('<%=ngapp%>.services.appService', []).service('appService', appService);

angular.module('appServices', [
    '<%=ngapp%>.services.appService'
]);