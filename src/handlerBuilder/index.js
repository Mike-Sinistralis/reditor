const fs = require('fs');
const path = require('path');
const utils = require('../utils');

const { readFile, mkdirp } = utils;

function buildHandler(typeName, directory) {
  readFile({
    dirPath: path.join(__dirname, 'content.js'),
    encoding: 'utf8',
  })
    .then((data) => {
      makeHandler(data, directory, `${typeName}.js`);
    })
    .catch((err) => {

    });
}

function makeHandler(content, directory, file) {
  mkdirp(directory).then(() => {
    fs.writeFile(path.join(directory, file), content, {flag: 'w'}, function (err) {
      console.log(err);
    })
  });
}

module.exports = buildHandler;
