"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gender_1 = require("./enums/Gender");
const FactoryPerson_1 = require("./factory/FactoryPerson");
const factoryPerson = new FactoryPerson_1.FactoryPerson();
factoryPerson.getPerson("João", 29, Gender_1.Gender.MALE);
factoryPerson.getPerson("Isabella", 24, Gender_1.Gender.FEMALE);
