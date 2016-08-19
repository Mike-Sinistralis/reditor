const config = require('./configmanager').getConfig();
const buildAction = require('./actionBuilder');
const buildHandler = require('./handlerBuilder');
const mkdirp = require('./utils').mkdirp;
const path = require('path');
// TODO Check for exist or overwrite? Should this be an option?
// TODO Common handlers

buildAction('myType', path.join(process.cwd(), '_actionTypes'));
buildHandler('myType', path.join(process.cwd(), '_reducers', 'app', 'App'));
