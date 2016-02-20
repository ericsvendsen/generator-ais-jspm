import angular from 'angular';

class AppConfig {
    constructor () {
        this.name = '<%=ngapp%>';
    }
}

angular.module('<%=ngapp%>.config', []).service('appConfig', [AppConfig]);

angular.module('appConfig', [
    '<%=ngapp%>.config'
]);