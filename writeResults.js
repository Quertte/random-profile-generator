const fs = require('fs');

function writeResults(arrNames) {
  fs.writeFileSync(`./results/${arrNames.length}-names.txt`, arrNames.join('\n'));
}

module.exports = writeResults;
