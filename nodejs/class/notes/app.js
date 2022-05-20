const uuid = require('uuid');

console.log(uuid.v4());

const {faker} = require('@faker-js/faker');

console.log(faker.name.findName());
console.log(faker.internet.email());

var shuffle = require('shuffle-array'),
collection = [ "Amir", "Tariq", "Qasim","Jamal"];

shuffle(collection);
console.log(collection);
