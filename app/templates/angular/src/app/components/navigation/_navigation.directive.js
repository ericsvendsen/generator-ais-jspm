export default function NavigationDirective () {
    return {
        restrict: 'E',
        templateUrl: './app/components/navigation/navigation.template.html',
        controller: 'navigationController',
        controllerAs: 'vm',
        scope: {}
    };
}