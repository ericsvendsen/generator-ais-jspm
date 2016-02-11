export default function NavigationDirective () {
    return {
        restrict: 'E',
        templateUrl: 'components/navigation/navigation.template.html',
        controller: 'navigationController',
        controllerAs: 'vm',
        scope: {}
    };
}