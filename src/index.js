const config = require('./configmanager').getConfig();
const buildAction = require('./actionBuilder');
const buildHandler = require('./handlerBuilder');
const buildReducer = require('./reducerBuilder');
const mkdirp = require('./utils').mkdirp;
const path = require('path');
// TODO Common handlers
// TODO Make reducer directory structure before performing file manipulation for either handler/reducer
// TODO Update root reducer if new reducer
// TODO Error Handling
/*
  Options
    rootReducer?
    overwrite if duplicate?
    immutable?
    rootDir? (default process.cwd())


    args

    wireAction type domain [reducers]
    ex. wireAction --type hasError --domain App --reducers app,user,polling
 */

buildAction('myType', path.join(process.cwd(), '_actionTypes'));
buildHandler('myType', path.join(process.cwd(), '_reducers', 'app', 'App'));
buildReducer('myType', path.join(process.cwd(), '_reducers', 'app'));
