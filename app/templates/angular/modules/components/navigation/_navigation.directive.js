export default function NavigationDirective () {
    return {
        restrict: 'E',
        templateUrl: 'modules/components/navigation/navigation.template.html',
        controller: 'navigationController',
        controllerAs: 'vm',
        scope: {}
    };
}