import headerTemplate from './header.template.html!text';

export default function HeaderDirective () {
    return {
        restrict: 'E',
        template: headerTemplate,
        controller: 'headerController',
        controllerAs: 'vm',
        scope: {}
    };
}