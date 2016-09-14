/**
 * Created by einarvalur on 14/09/2016.
 */

'use strict';

export const INITIAL_STATE = {
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

const position = (state = INITIAL_STATE.position, action, orientation = INITIAL_STATE.orientation, size = INITIAL_STATE.size, placed = false) => {
    if (!placed) {
        return state;
    }

    switch (action.type) {
        case 'MOVE':
            if (orientation == 'NORTH') {
                if (state.y + 1 > size.y) {
                    return state;
                }

                return {
                    ...state,
                    y: state.y + 1
                }
            }
            else if (orientation == 'EAST') {
                if (state.x + 1 > size.x) {
                    return state;
                }

                return {
                    ...state,
                    x: state.x + 1
                }
            }
            else if (orientation == 'SOUTH') {
                if (state.y - 1 < 0) {
                    return state;
                }

                return {
                    ...state,
                    y: state.y - 1
                }
            }
            else if (orientation == 'WEST') {
                if (state.x - 1 < 0) {
                    return state;
                }

                return {
                    ...state,
                    x: state.x - 1
                }
            }
            break;
        default :
            return state;
    }
};

const size = (state = INITIAL_STATE.size, action) => {
    switch (action.type) {
        case 'SIZE':
            return action.size;
        default :
            return state;
    }
};

const orientationLeft = (state = INITIAL_STATE.orientation, action) => {
    switch (action.type) {
        case 'LEFT':
            if (state == 'NORTH') {
                return 'WEST';
            }
            else if (state == 'EAST') {
                return 'NORTH';
            }
            else if (state == 'SOUTH') {
                return 'EAST'
            }
            else if (state == 'WEST') {
                return 'SOUTH';
            }
            break;
        default :
            return state;
    }
};

const orientationRight = (state = INITIAL_STATE.orientation, action) => {
    switch (action.type) {
        case 'RIGHT':
            if (state == 'NORTH') {
                return 'EAST';
            }
            else if (state == 'EAST') {
                return 'SOUTH';
            }
            else if (state == 'SOUTH') {
                return 'WEST';
            }
            else if (state == 'WEST') {
                return 'NORTH';
            }
            break;
        default :
            return state;
    }
};

const placed = (state = INITIAL_STATE, action) => {
    if (action.x > state.size.x || action.y > state.size.y) {
        return state;
    }
    switch (action.type) {
        case 'PLACE':
            return {
                ...state,
                placed: true,
                position: {
                x: action.x,
                    y: action.y
            },
            orientation: action.orientation
        };
        default :
            return state;
    }
};

export const robotReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PLACE':
            return placed(state, action);
        case 'LEFT':
            return {
                ...state,
                orientation: orientationLeft(state.orientation, action)
            };
        case 'RIGHT':
            return {
                ...state,
                orientation: orientationRight(state.orientation, action)
            };
        case 'SIZE':
            return {
                ...state,
                size: size(state.size, action)
            };
        case 'MOVE':
            return {
                ...state,
                position: position(state.position, action, state.orientation, state.size, state.placed)
            };
            break;
        default :
            return state;
    }
};
