import moment from 'moment';

export default function FooterController () {
    let self = this;

    self.copyright = '&copy; ' + moment().year();

    let initialize = function () {
        // initialization

    };

    initialize();
}