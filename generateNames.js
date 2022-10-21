const randomProfile = require('random-profile-generator');

module.exports = function generateNames(count) {
  const arrNames = [];
  for (let i = 0; i < count; i += 1) {
    arrNames.push(randomProfile.name());
  }
  return arrNames;
};

