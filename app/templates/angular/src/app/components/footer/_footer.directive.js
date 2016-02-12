import footerTemplate from './footer.template.html!text';

export default function FooterDirective () {
    return {
        restrict: 'E',
        template: footerTemplate,
        controller: 'footerController',
        controllerAs: 'vm',
        scope: {}
    };
}