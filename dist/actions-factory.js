/**
 * Created by einarvalur on 15/09/2016.
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.actionsFactory = undefined;

var _actions = require('./actions.js');

var actionsFactory = exports.actionsFactory = function actionsFactory(input) {
    var inputString = input.trim();
    var placeArray = inputString.match(/^(PLACE)(\s)*([0-9]+)([,\s]*)([0-9]+)([,\s]*)(EAST|WEST|NORTH|SOUTH)*$/);

    if (placeArray) {
        return (0, _actions.placeAction)(parseInt(placeArray[3]), parseInt(placeArray[5]), placeArray[7]);
    } else if (inputString == 'MOVE') {
        return (0, _actions.moveAction)();
    } else if (inputString == 'LEFT') {
        return (0, _actions.leftAction)();
    } else if (inputString == 'RIGHT') {
        return (0, _actions.rightAction)();
    } else if (inputString == 'REPORT') {
        return { type: 'REPORT' };
    } else {
        return { type: 'UNDEFINED_ACTION' };
    }
};