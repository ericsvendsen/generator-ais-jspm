export default class Person {
    constructor (name, title) {
        this.name = name;
        this.title = title;
    }

    static build (data) {
        if (data) {
            return new Person(
                data.name,
                data.title
            );
        }
    }

    static transformer (data) {
        if (data.isArray()) {
            return data.map(Person.build);
        }
        return Person.build(data);
    }
}