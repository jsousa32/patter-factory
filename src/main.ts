import { Gender } from "./enums/Gender";
import { FactoryPerson } from "./factory/FactoryPerson";

const factoryPerson = new FactoryPerson();

factoryPerson.getPerson("João", 29, Gender.MALE);
factoryPerson.getPerson("Isabella", 24, Gender.FEMALE);
