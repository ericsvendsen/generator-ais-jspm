import moment from 'moment';

function initialize () {
    // initialization

}

export default function FooterController () {
    let self = this;

    self.copyright = '&copy; ' + moment().year();

    initialize();
}