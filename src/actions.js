/**
 * Created by einarvalur on 14/09/2016.
 */

"use strict";

export const moveAction = () => {
    return {
        type: 'MOVE'
    };
};

export const leftAction = () => {
    return {
        type: 'LEFT'
    };
};

export const rightAction = () => {
    return {
        type: 'RIGHT'
    };
};
export const placeAction = (x = 0, y = 0, orientation = 'SOUTH') => {
    return {
        type: 'PLACE',
        x: x,
        y: y,
        orientation: orientation
    };
};
