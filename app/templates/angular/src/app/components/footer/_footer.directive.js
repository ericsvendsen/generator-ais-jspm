export default function FooterDirective () {
    return {
        restrict: 'E',
        templateUrl: './app/components/footer/footer.template.html',
        controller: 'footerController',
        controllerAs: 'vm',
        scope: {}
    };
}