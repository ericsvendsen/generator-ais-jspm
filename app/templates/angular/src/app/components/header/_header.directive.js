export default function HeaderDirective () {
    return {
        restrict: 'E',
        templateUrl: './app/components/header/header.template.html',
        controller: 'headerController',
        scope: {}
    };
}