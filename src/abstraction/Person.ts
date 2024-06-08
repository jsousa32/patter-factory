import { Gender } from "../enums/Gender";

export abstract class Person {

    public name: string;

    public age: number;

    public gender: Gender

    constructor(name: string, age: number, gender: Gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}