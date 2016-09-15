/**
 * Created by einarvalur on 14/09/2016.
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var INITIAL_STATE = exports.INITIAL_STATE = {
    "position": {
        "x": 0,
        "y": 0
    },
    "orientation": "SOUTH",
    "placed": false,
    "size": {
        "x": 5,
        "y": 5
    }
};

var position = function position() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE.position : arguments[0];
    var action = arguments[1];
    var orientation = arguments.length <= 2 || arguments[2] === undefined ? INITIAL_STATE.orientation : arguments[2];
    var size = arguments.length <= 3 || arguments[3] === undefined ? INITIAL_STATE.size : arguments[3];
    var placed = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];

    if (!placed) {
        return state;
    }

    switch (action.type) {
        case 'MOVE':
            if (orientation == 'NORTH') {
                if (state.y + 1 > size.y) {
                    return state;
                }

                return _extends({}, state, {
                    y: state.y + 1
                });
            } else if (orientation == 'EAST') {
                if (state.x + 1 > size.x) {
                    return state;
                }

                return _extends({}, state, {
                    x: state.x + 1
                });
            } else if (orientation == 'SOUTH') {
                if (state.y - 1 < 0) {
                    return state;
                }

                return _extends({}, state, {
                    y: state.y - 1
                });
            } else if (orientation == 'WEST') {
                if (state.x - 1 < 0) {
                    return state;
                }

                return _extends({}, state, {
                    x: state.x - 1
                });
            }
            break;
        default:
            return state;
    }
};

var size = function size() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE.size : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case 'SIZE':
            return action.size;
        default:
            return state;
    }
};

var orientationLeft = function orientationLeft() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE.orientation : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case 'LEFT':
            if (state == 'NORTH') {
                return 'WEST';
            } else if (state == 'EAST') {
                return 'NORTH';
            } else if (state == 'SOUTH') {
                return 'EAST';
            } else if (state == 'WEST') {
                return 'SOUTH';
            }
            break;
        default:
            return state;
    }
};

var orientationRight = function orientationRight() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE.orientation : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case 'RIGHT':
            if (state == 'NORTH') {
                return 'EAST';
            } else if (state == 'EAST') {
                return 'SOUTH';
            } else if (state == 'SOUTH') {
                return 'WEST';
            } else if (state == 'WEST') {
                return 'NORTH';
            }
            break;
        default:
            return state;
    }
};

var placed = function placed() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
    var action = arguments[1];

    if (action.x > state.size.x || action.y > state.size.y) {
        return state;
    }
    switch (action.type) {
        case 'PLACE':
            return _extends({}, state, {
                placed: true,
                position: {
                    x: action.x,
                    y: action.y
                },
                orientation: action.orientation
            });
        default:
            return state;
    }
};

var robotReducer = exports.robotReducer = function robotReducer() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case 'PLACE':
            return placed(state, action);
        case 'LEFT':
            return _extends({}, state, {
                orientation: orientationLeft(state.orientation, action)
            });
        case 'RIGHT':
            return _extends({}, state, {
                orientation: orientationRight(state.orientation, action)
            });
        case 'SIZE':
            return _extends({}, state, {
                size: size(state.size, action)
            });
        case 'MOVE':
            return _extends({}, state, {
                position: position(state.position, action, state.orientation, state.size, state.placed)
            });
            break;
        default:
            return state;
    }
};