"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Male = void 0;
const Person_1 = require("../abstraction/Person");
const Gender_1 = require("../enums/Gender");
class Male extends Person_1.Person {
    constructor(name, age) {
        super(name, age, Gender_1.Gender.MALE);
    }
    introducePerson() {
        console.log(`Hi my name is ${this.name}, my age is ${this.age} years old and my gender is male`);
    }
}
exports.Male = Male;
