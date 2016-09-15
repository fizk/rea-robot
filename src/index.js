/**
 * Created by einarvalur on 15/09/2016.
 */

'use strict';

import readline from 'readline';
import { createStore } from 'redux';
import { robotReducer } from './robot-reducer.js';
import { actionsFactory } from './actions-factory.js';

const consoleReader = readline.createInterface({input: process.stdin, output: process.stdout});
const store = createStore(robotReducer);

consoleReader.on('line', (input) => {
    let action = actionsFactory(input);

    switch (action.type) {
        case 'REPORT':
            let currentStoreState = store.getState();
            console.log(`${currentStoreState.position.x},${currentStoreState.position.y},${currentStoreState.orientation}`);
            break;
        case 'UNDEFINED_ACTION':
            console.log('I don\'t understand');
            break;
        default :
            store.dispatch(action);
            break;
    }
});

console.log("Welcome to the REA Robot\nState your command");
