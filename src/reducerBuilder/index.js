//if file exists, include imports and reducer bindings

const fs = require('fs');
const path = require('path');
const utils = require('../utils');

const { readFile, mkdirp, doesFileExist } = utils;

function makeReducer(content, directory, file) {
  return mkdirp(directory).then(() => {
    fs.writeFile(path.join(directory, file), content, {flag: 'w'}, function (err) {
      console.log(err);
    })
  });
}

function buildReducer(typeName, directory) {
  const file = 'index.js';

  doesFileExist(path.join(directory, file))
    .then((doesExist) => {
      if (!doesExist) {
        return readFile({
          dirPath: path.join(__dirname, 'content.js'),
          encoding: 'utf8',
        })
        .then((data) => {
          makeReducer(data, directory, file);
        })
      }
    })
    .then(() => {

    });
}

module.exports = buildReducer;
