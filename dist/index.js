"use strict";

const uniqueRandomArray = require('unique-random-array');

const starwarsNames = require('./starwars-names.json');

const random = uniqueRandomArray(starwarsNames);
module.exports = {
  all: starwarsNames,
  random
};