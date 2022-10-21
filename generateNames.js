const randomProfile = require('random-profile-generator');

module.exports = function generateNames(count = process.argv[2]) {
  const arrNames = [];
  for (let i = 0; i < count; i++) {
    arrNames.push(randomProfile.name());
  }
  return arrNames;
};
