export default function HeaderDirective () {
    return {
        restrict: 'E',
        templateUrl: 'modules/components/header/header.template.html',
        controller: 'headerController',
        scope: {}
    };
}