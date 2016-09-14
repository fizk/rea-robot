/**
 * Created by einarvalur on 15/09/2016.
 */

'use strict';

import assert from 'assert';
import { actionFactory } from '../src/actions-factory.js';

describe('Action factory', () => {
    it('should return PLACE action', () => {
        let expectedAction = {
            type: 'PLACE',
            x: 1,
            y: 2,
            orientation: 'SOUTH'
        };

        let action1 = actionFactory('PLACE 1 2 SOUTH');
        let action2 = actionFactory('PLACE 1, 2, SOUTH');
        let action3 = actionFactory('PLACE 1    2, SOUTH');
        let action4 = actionFactory('PLACE 1    2');
        let action5 = actionFactory('PLACE   1    2,');
        let action6 = actionFactory('  PLACE   1    2  ');

        assert.deepStrictEqual(action1, expectedAction);
        assert.deepStrictEqual(action2, expectedAction);
        assert.deepStrictEqual(action3, expectedAction);
        assert.deepStrictEqual(action4, expectedAction);
        assert.deepStrictEqual(action5, expectedAction);
        assert.deepStrictEqual(action6, expectedAction);
    });

    it('should return MOVE action', () => {
        let expectedAction = {type: 'MOVE'};

        let action1 = actionFactory('MOVE');
        let action2 = actionFactory(' MOVE ');

        assert.deepStrictEqual(action1, expectedAction);
        assert.deepStrictEqual(action2, expectedAction);
    });

    it('should return LEFT action', () => {
        let expectedAction = {type: 'LEFT'};

        let action1 = actionFactory('LEFT');
        let action2 = actionFactory(' LEFT ');

        assert.deepStrictEqual(action1, expectedAction);
        assert.deepStrictEqual(action2, expectedAction);
    });

    it('should return RIGHT action', () => {
        let expectedAction = {type: 'RIGHT'};

        let action1 = actionFactory('RIGHT');
        let action2 = actionFactory(' RIGHT ');

        assert.deepStrictEqual(action1, expectedAction);
        assert.deepStrictEqual(action2, expectedAction);
    });

    it('should return UNDEFINED_ACTION', () => {
        let expectedAction = {type: 'UNDEFINED_ACTION'};

        let action1 = actionFactory('RANDOM INPUT');
        let action2 = actionFactory('PLACE 1 2 SOUTH-WEST');
        let action3 = actionFactory('PLACE 1 y SOUTH');
        let action4 = actionFactory('place 1 2 south');
        let action5 = actionFactory('PLACE');

        assert.deepStrictEqual(action1, expectedAction);
        assert.deepStrictEqual(action2, expectedAction);
        assert.deepStrictEqual(action3, expectedAction);
        assert.deepStrictEqual(action4, expectedAction);
        assert.deepStrictEqual(action5, expectedAction);
    });
});
