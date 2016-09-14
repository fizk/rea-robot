/**
 * Created by einarvalur on 15/09/2016.
 */

'use strict';

import assert from 'assert';
import { actionsFactory } from '../src/actions-factory.js';

describe('Actions factory', () => {
    it('should return PLACE action', () => {
        let expectedAction = {
            type: 'PLACE',
            x: 1,
            y: 2,
            orientation: 'SOUTH'
        };

        let action1 = actionsFactory('PLACE 1 2 SOUTH');
        let action2 = actionsFactory('PLACE 1, 2, SOUTH');
        let action3 = actionsFactory('PLACE 1    2, SOUTH');
        let action4 = actionsFactory('PLACE 1    2');
        let action5 = actionsFactory('PLACE   1    2,');
        let action6 = actionsFactory('  PLACE   1    2  ');

        assert.deepStrictEqual(action1, expectedAction);
        assert.deepStrictEqual(action2, expectedAction);
        assert.deepStrictEqual(action3, expectedAction);
        assert.deepStrictEqual(action4, expectedAction);
        assert.deepStrictEqual(action5, expectedAction);
        assert.deepStrictEqual(action6, expectedAction);
    });

    it('should return MOVE action', () => {
        let expectedAction = {type: 'MOVE'};

        let action1 = actionsFactory('MOVE');
        let action2 = actionsFactory(' MOVE ');

        assert.deepStrictEqual(action1, expectedAction);
        assert.deepStrictEqual(action2, expectedAction);
    });

    it('should return LEFT action', () => {
        let expectedAction = {type: 'LEFT'};

        let action1 = actionsFactory('LEFT');
        let action2 = actionsFactory(' LEFT ');

        assert.deepStrictEqual(action1, expectedAction);
        assert.deepStrictEqual(action2, expectedAction);
    });

    it('should return RIGHT action', () => {
        let expectedAction = {type: 'RIGHT'};

        let action1 = actionsFactory('RIGHT');
        let action2 = actionsFactory(' RIGHT ');

        assert.deepStrictEqual(action1, expectedAction);
        assert.deepStrictEqual(action2, expectedAction);
    });

    it('should return UNDEFINED_ACTION', () => {
        let expectedAction = {type: 'UNDEFINED_ACTION'};

        let action1 = actionsFactory('RANDOM INPUT');
        let action2 = actionsFactory('PLACE 1 2 SOUTH-WEST');
        let action3 = actionsFactory('PLACE 1 y SOUTH');
        let action4 = actionsFactory('place 1 2 south');
        let action5 = actionsFactory('PLACE');

        assert.deepStrictEqual(action1, expectedAction);
        assert.deepStrictEqual(action2, expectedAction);
        assert.deepStrictEqual(action3, expectedAction);
        assert.deepStrictEqual(action4, expectedAction);
        assert.deepStrictEqual(action5, expectedAction);
    });
});
