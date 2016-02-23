import angular from 'angular';

class AppConfig {
    constructor () {
        this.name = '<%=appId%>';
    }
}

angular.module('<%=appId%>.config', []).service('appConfig', [AppConfig]);

angular.module('appConfig', [
    '<%=appId%>.config'
]);