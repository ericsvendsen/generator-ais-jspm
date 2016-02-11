export default function HeaderDirective () {
    return {
        restrict: 'E',
        templateUrl: 'components/header/header.template.html',
        controller: 'headerController',
        scope: {}
    };
}