import navigationTemplate from './navigation.template.html!text';

export default function NavigationDirective () {
    return {
        restrict: 'E',
        template: navigationTemplate,
        controller: 'navigationController',
        controllerAs: 'vm',
        scope: {}
    };
}