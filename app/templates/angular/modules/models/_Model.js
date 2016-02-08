(function () {
    'use strict';

    angular.module('<%=ngapp%>').factory('Model', model);

    function model () {
        var Model = function (name, title) {
            this.name = name;
            this.title = title;
        };

        // public methods
        Model.prototype = {

        };

        // static methods
        Model.build = function (data) {
            if (data) {
                return new Model(
                    data.name,
                    data.title
                );
            }
            return new Model();
        };

        Model.transformer = function (data) {
            if (angular.isArray(data)) {
                return data.map(Model.build);
            }
            return Model.build(data);
        };

        return Model;
    }
})();