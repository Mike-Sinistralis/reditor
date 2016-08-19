const fs = require('fs');
const path = require('path');

function doesFileExist(dirPath) {
  return new Promise((res) => {
    fs.access(dirPath, fs.F_OK, (err) => {
      if (err) {
        res(false)
      }

      res(true);
    })
  });
}

function readFile({ dirPath, encoding }) {
  return new Promise((res, rej) => {
    fs.readFile(dirPath, encoding, (err, data) => {
      if (err) {
        rej(err);
      }

      res(data);
    });
  });
}

function mkdir(dirPath) {
  return new Promise((res, rej) => {
    fs.access(dirPath, fs.F_OK, (err) => {
      if (err) {
        fs.mkdir(dirPath, (err) => {
          if (err) {
            rej(err);
          }

          res();
        });
      }

      res();
    });
  });
}

function mkdirp(dirPath) {
  const directories = dirPath.split(path.sep);
  let dirFactory = Promise.resolve();

  for( let i = 1; i <= directories.length; i++ ) {
    dirFactory = dirFactory.then(() => mkdir(path.join(...directories.slice(0, i))));
  }

  return dirFactory;
}

function convertTypeToConst(type) {
  type = type.replace(/([a-z])([A-Z])/g, '$1_$2');
  type = type.replace(/([A-Z])([A-Z][a-z])/g, '$1_$2')
  return type.toUpperCase();
}

module.exports = {
  readFile,
  mkdir,
  mkdirp,
  doesFileExist,
  convertTypeToConst,
};



