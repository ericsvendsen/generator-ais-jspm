import moment from 'moment';

function initialize () {
    // initialization

}

export default function FooterController () {
    this.copyright = '&copy; ' + moment().year();

    initialize();
}