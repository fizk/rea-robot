/**
 * Created by einarvalur on 15/09/2016.
 */

'use strict';

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

var _redux = require('redux');

var _robotReducer = require('./robot-reducer.js');

var _actionsFactory = require('./actions-factory.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var consoleReader = _readline2.default.createInterface({ input: process.stdin, output: process.stdout });
var store = (0, _redux.createStore)(_robotReducer.robotReducer);

consoleReader.on('line', function (input) {
    var action = (0, _actionsFactory.actionsFactory)(input);

    switch (action.type) {
        case 'REPORT':
            var currentStoreState = store.getState();
            console.log(currentStoreState.position.x + ',' + currentStoreState.position.y + ',' + currentStoreState.orientation);
            break;
        case 'UNDEFINED_ACTION':
            console.log('I don\'t understand');
            break;
        default:
            store.dispatch(action);
            break;
    }
});

console.log("Welcome to the REA Robot\nState your command");