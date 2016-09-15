/**
 * Created by einarvalur on 14/09/2016.
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var moveAction = exports.moveAction = function moveAction() {
    return {
        type: 'MOVE'
    };
};

var leftAction = exports.leftAction = function leftAction() {
    return {
        type: 'LEFT'
    };
};

var rightAction = exports.rightAction = function rightAction() {
    return {
        type: 'RIGHT'
    };
};
var placeAction = exports.placeAction = function placeAction() {
    var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
    var orientation = arguments.length <= 2 || arguments[2] === undefined ? 'SOUTH' : arguments[2];

    return {
        type: 'PLACE',
        x: x,
        y: y,
        orientation: orientation
    };
};