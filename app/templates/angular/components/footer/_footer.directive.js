export default function FooterDirective () {
    return {
        restrict: 'E',
        templateUrl: 'components/footer/footer.template.html',
        controller: 'footerController',
        controllerAs: 'vm',
        scope: {}
    };
}