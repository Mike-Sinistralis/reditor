const fs = require('fs');
const configNames = ['reditor.conf.js', 'reditor.conf.json'];
let configIndex = 0;
let config;

while (!config && configIndex < configNames.length) {
  try {
    config = require(`${process.cwd()}/${configNames[configIndex]}`);
  } catch(e) {
    configIndex++;
  }
}

if (!config) {
  console.error("Could not find reditor.conf.js");
}

module.exports = {
  getConfig: () => config
};