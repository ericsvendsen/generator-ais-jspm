(function () {
    'use strict';

    angular.module('<%=ngapp%>').service('appService', appService);

    function appService () {
        return {
            method1: function () {
                return {};
            },
            method2: function () {
                return {};
            }
        };
    }
})();