const config = require('./configmanager').getConfig();
const buildAction = require('./actionBuilder');
const buildHandler = require('./handlerBuilder');
const buildReducer = require('./reducerBuilder');
const mkdirp = require('./utils').mkdirp;
const path = require('path');
// TODO Check for exist or overwrite? Should this be an option?
// TODO Common handlers
// TODO Make reducer directory structure before performing file manipulation for either handler/reducer
// TODO Update root reducer if new reducer

buildAction('myType', path.join(process.cwd(), '_actionTypes'));
buildHandler('myType', path.join(process.cwd(), '_reducers', 'app', 'App'));
buildReducer('myType', path.join(process.cwd(), '_reducers', 'app'));
