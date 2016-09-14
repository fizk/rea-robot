/**
 * Created by einarvalur on 15/09/2016.
 */

"use strict";

import { leftAction, rightAction, moveAction, placeAction } from './actions.js';

export const actionsFactory = (input) => {
    let inputString = input.trim();
    let placeArray = inputString.match(/^(PLACE)(\s)*([0-9]+)([,\s]*)([0-9]+)([,\s]*)(EAST|WEST|NORTH|SOUTH)*$/);

    if (placeArray) {
        return placeAction(parseInt(placeArray[3]), parseInt(placeArray[5]), placeArray[7]);
    } else if (inputString == 'MOVE') {
        return moveAction();
    } else if (inputString == 'LEFT') {
        return leftAction();
    } else if (inputString == 'RIGHT') {
        return rightAction();
    } else if (inputString == 'REPORT') {
        return {type: 'REPORT'}
    } else {
        return {type: 'UNDEFINED_ACTION'}
    }
};
