import { Gender } from "../enums/Gender";
import { Female } from "../implementation/Female";
import { Male } from "../implementation/Male";

export class FactoryPerson {

    public getPerson(name: string, age: number, gender: Gender) {
        gender == Gender.FEMALE ? new Female(name, age).introducePerson() : new Male(name, age).introducePerson();
    }
}