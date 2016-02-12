export default function HeaderController () {
    let self = this;

    self.message = '';

    let initialize = function () {
        self.message = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';
    };

    initialize();
}