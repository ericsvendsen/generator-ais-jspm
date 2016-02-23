import angular from 'angular';

import Person from './Person.js';

angular.module('<%=appId%>.models.Person', []).factory('Person', [Person]);

angular.module('appModels', [
    '<%=appId%>.models.Person'
]);