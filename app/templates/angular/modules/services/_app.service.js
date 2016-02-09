export default class appService {
    constructor () {

    }

    getPeople () {
        let people = [
            {
                name: 'Bob Smith',
                title: 'President'
            },
            {
                name: 'Jane Doe',
                title: 'CEO'
            }
        ];
        return Promise.resolve(people);
    }
}