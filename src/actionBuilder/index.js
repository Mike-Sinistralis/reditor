const fs = require('fs');
const path = require('path');
const utils = require('../utils');

const { readFile, mkdirp } = utils;

function buildAction(typeName, directory) {
  readFile({
    path: path.join(__dirname, 'content.js'),
    encoding: 'utf8',
  })
    .then((data) => {
      const content = data.replace(/TYPE_NAME/g, typeName);

      makeAction(content, directory, `${typeName}.js`);
    })
    .catch((err) => {

    });
}

function makeAction(content, directory, file) {
  mkdirp(directory).then(() => {
    console.log('hello');
    fs.writeFile(path.join(directory, file), content, {flag: 'w'}, function (err) {
      console.log(err);
    })
  });
}

module.exports = buildAction;
