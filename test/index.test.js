const expect = require('chai').expect;
const starwarNames = require('../src');

function isArrayOfString(array) {
  return array.every(item => typeof item === 'string')
}

describe('starwars names', () => {
  it('should have a list of all available names', () => {
    const names = starwarNames.all;
    expect(isArrayOfString(names)).to.be.true;
  });

  it('should allow to get a random name from list', () => {
    const allNames = starwarNames.all;
    const name = starwarNames.random();

    expect(allNames.includes(name)).to.be.true;
  });
});
