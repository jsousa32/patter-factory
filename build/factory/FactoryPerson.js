"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryPerson = void 0;
const Gender_1 = require("../enums/Gender");
const Female_1 = require("../implementation/Female");
const Male_1 = require("../implementation/Male");
class FactoryPerson {
    getPerson(name, age, gender) {
        gender == Gender_1.Gender.FEMALE ? new Female_1.Female(name, age).introducePerson() : new Male_1.Male(name, age).introducePerson();
    }
}
exports.FactoryPerson = FactoryPerson;
