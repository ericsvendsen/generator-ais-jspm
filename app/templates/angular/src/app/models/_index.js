import angular from 'angular';

import Person from './Person.js';

angular.module('<%=ngapp%>.models.Person', []).factory('Person', [Person]);

angular.module('appModels', [
    '<%=ngapp%>.models.Person'
]);