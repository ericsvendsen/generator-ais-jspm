import Person from '../../models/Person.js';
import appService from '../../services/app.service.js';

export default function AboutController () {
    let self = this;

    self.appService = new appService();
    self.people = [];

    let initialize = function () {
        return self.appService.getPeople().then(people => self.people = Person.transformer(people));
    };

    initialize();
}