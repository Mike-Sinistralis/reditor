const fs = require('fs');
const path = require('path');

function readFile({ path, encoding }) {
  return new Promise((res, rej) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) {
        rej(err);
      }

      res(data);
    });
  });
}

function mkdir(path) {
  return new Promise((res, rej) => {
    fs.access(path, fs.F_OK, (err) => {
      if (err) {
        fs.mkdir(path, (err) => {
          if (err) {
            console.log(err);
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

module.exports = {
  readFile,
  mkdir,
  mkdirp,
};



