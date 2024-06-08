import { Person } from "../abstraction/Person";
import { Gender } from "../enums/Gender";

export class Male extends Person {

    constructor(name: string, age: number) {
        super(name, age, Gender.MALE);
    }

    public introducePerson() {
        console.log(`Hi my name is ${this.name}, my age is ${this.age} years old and my gender is male`);
    }
}