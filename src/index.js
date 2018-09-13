const uniqueRandomArray = require('unique-random-array');
const starwarsNames = require('./starwars-names.json');

const random = uniqueRandomArray(starwarsNames);

const mainExport = {
  all: starwarsNames,
  random,
};

// export default mainExport;
module.exports = mainExport; // for CommonJS compatibility
