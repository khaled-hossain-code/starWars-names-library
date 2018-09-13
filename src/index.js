const uniqueRandomArray = require('unique-random-array');
const starwars_names = require('./starwars-names.json');
const random = uniqueRandomArray(starwars_names);

module.exports = {
  all : starwars_names,
  random: random
}