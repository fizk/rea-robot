/**
 * Created by einarvalur on 14/09/2016.
 */

'use strict';

import assert from 'assert';
import { robotReducer, INITIAL_STATE} from '../src/robot-reducer.js';
import { moveAction, leftAction, rightAction, placeAction } from '../src/actions.js';

describe('Robot Reducer', () => {
    it('should return default state', () => {
        let beforeState = undefined;
        let afterState = INITIAL_STATE;

        assert.deepStrictEqual(
            robotReducer(beforeState, {type: 'UNDEFINED-ACTION'}),
            afterState
        );
    });

    it('should place an robot in a fixed position', () => {
        let beforeState = undefined;
        let afterState = Object.assign({}, INITIAL_STATE, {
            placed: true,
            position: {x: 3, y: 3},
            orientation: 'SOUTH'
        });

        assert.deepStrictEqual(
            robotReducer(beforeState, placeAction(3, 3, 'SOUTH')),
            afterState
        );
    });

    it('should move up if facing NORTH', () => {
        let beforeState = Object.assign({}, INITIAL_STATE, {
            position: {x: 3, y: 3},
            placed: true,
            orientation: 'NORTH'
        });
        let afterState =  Object.assign({}, INITIAL_STATE, {
            position: {x: 3, y: 4},
            placed: true,
            orientation: 'NORTH'
        });

        assert.deepStrictEqual(
            robotReducer(beforeState, moveAction()),
            afterState
        );
    });

    it('should move down if facing SOUTH', () => {
        let beforeState = Object.assign({}, INITIAL_STATE, {
            position: {x: 3, y: 3},
            placed: true,
            orientation: 'SOUTH'
        });
        let afterState =  Object.assign({}, INITIAL_STATE, {
            position: {x: 3, y: 2},
            placed: true,
            orientation: 'SOUTH'
        });

        assert.deepStrictEqual(
            robotReducer(beforeState, moveAction()),
            afterState
        );
    });

    it('should move left if facing WEST', () => {
        let beforeState = Object.assign({}, INITIAL_STATE, {
            position: {x: 3, y: 3},
            placed: true,
            orientation: 'WEST'
        });
        let afterState =  Object.assign({}, INITIAL_STATE, {
            position: {x: 2, y: 3},
            placed: true,
            orientation: 'WEST'
        });

        assert.deepStrictEqual(
            robotReducer(beforeState, moveAction()),
            afterState
        );
    });

    it('should move right if facing EAST', () => {
        let beforeState = Object.assign({}, INITIAL_STATE, {
            position: {x: 3, y: 3},
            placed: true,
            orientation: 'EAST'
        });
        let afterState =  Object.assign({}, INITIAL_STATE, {
            position: {x: 4, y: 3},
            placed: true,
            orientation: 'EAST'
        });

        assert.deepStrictEqual(
            robotReducer(beforeState, moveAction()),
            afterState
        );
    });

    it('should after LEFT, face NORTH -> WEST', () => {
        let beforeState = Object.assign({}, INITIAL_STATE, {
            placed: true,
            orientation: 'NORTH'
        });
        let afterState =  Object.assign({}, INITIAL_STATE, {
            placed: true,
            orientation: 'WEST'
        });

        assert.deepStrictEqual(
            robotReducer(beforeState, leftAction()),
            afterState
        );
    });

    it('should after LEFT, face EAST -> NORTH', () => {
        let beforeState = Object.assign({}, INITIAL_STATE, {
            placed: true,
            orientation: 'EAST'
        });
        let afterState =  Object.assign({}, INITIAL_STATE, {
            placed: true,
            orientation: 'NORTH'
        });

        assert.deepStrictEqual(
            robotReducer(beforeState, leftAction()),
            afterState
        );
    });

    it('should after LEFT, face SOUTH -> EAST', () => {
        let beforeState = Object.assign({}, INITIAL_STATE, {
            placed: true,
            orientation: 'SOUTH'
        });
        let afterState =  Object.assign({}, INITIAL_STATE, {
            placed: true,
            orientation: 'EAST'
        });

        assert.deepStrictEqual(
            robotReducer(beforeState, leftAction()),
            afterState
        );
    });

    it('should after LEFT, face WEST -> SOUTH', () => {
        let beforeState = Object.assign({}, INITIAL_STATE, {
            placed: true,
            orientation: 'WEST'
        });
        let afterState =  Object.assign({}, INITIAL_STATE, {
            placed: true,
            orientation: 'SOUTH'
        });

        assert.deepStrictEqual(
            robotReducer(beforeState, leftAction()),
            afterState
        );
    });

    it('should after RIGHT, face NORTH -> EAST', () => {
        let beforeState = Object.assign({}, INITIAL_STATE, {
            placed: true,
            orientation: 'NORTH'
        });
        let afterState =  Object.assign({}, INITIAL_STATE, {
            placed: true,
            orientation: 'EAST'
        });

        assert.deepStrictEqual(
            robotReducer(beforeState, rightAction()),
            afterState
        );
    });

    it('should after RIGHT, face EAST -> SOUTH', () => {
        let beforeState = Object.assign({}, INITIAL_STATE, {
            placed: true,
            orientation: 'EAST'
        });
        let afterState =  Object.assign({}, INITIAL_STATE, {
            placed: true,
            orientation: 'SOUTH'
        });

        assert.deepStrictEqual(
            robotReducer(beforeState, rightAction()),
            afterState
        );
    });

    it('should after RIGHT, face SOUTH -> WEST', () => {
        let beforeState = Object.assign({}, INITIAL_STATE, {
            placed: true,
            orientation: 'SOUTH'
        });
        let afterState =  Object.assign({}, INITIAL_STATE, {
            placed: true,
            orientation: 'WEST'
        });

        assert.deepStrictEqual(
            robotReducer(beforeState, rightAction()),
            afterState
        );
    });

    it('should after RIGHT, face WEST -> NORTH', () => {
        let beforeState = Object.assign({}, INITIAL_STATE, {
            placed: true,
            orientation: 'WEST'
        });
        let afterState =  Object.assign({}, INITIAL_STATE, {
            placed: true,
            orientation: 'NORTH'
        });

        assert.deepStrictEqual(
            robotReducer(beforeState, rightAction()),
            afterState
        );
    });

    it('should not exceed size with PLACE', () => {
        assert.deepStrictEqual(
            robotReducer(INITIAL_STATE, placeAction(100, 100, 'WEST')),
            INITIAL_STATE
        )
    });

    it('should not MOVE if not PLACED', () => {
        assert.deepStrictEqual(
            robotReducer(INITIAL_STATE, moveAction()),
            INITIAL_STATE
        );
    });

    it('should not exceed size with MOVE when facing NORTH', () => {
        let beforeState = Object.assign({}, INITIAL_STATE, {
            position: {x: 5, y: 5},
            placed: true,
            orientation: 'NORTH'
        });

        assert.deepStrictEqual(
            robotReducer(beforeState, moveAction()),
            beforeState
        );
    });

    it('should not exceed size with MOVE when facing SOUTH', () => {
        let beforeState = Object.assign({}, INITIAL_STATE, {
            position: {x: 0, y: 0},
            placed: true,
            orientation: 'SOUTH'
        });

        assert.deepStrictEqual(
            robotReducer(beforeState, moveAction()),
            beforeState
        );
    });

    it('should not exceed size with MOVE when facing EAST', () => {
        let beforeState = Object.assign({}, INITIAL_STATE, {
            position: {x: 5, y: 5},
            placed: true,
            orientation: 'EAST'
        });

        assert.deepStrictEqual(
            robotReducer(beforeState, moveAction()),
            beforeState
        );
    });

    it('should not exceed size with MOVE when facing WEST', () => {
        let beforeState = Object.assign({}, INITIAL_STATE, {
            position: {x: 0, y: 0},
            placed: true,
            orientation: 'WEST'
        });

        assert.deepStrictEqual(
            robotReducer(beforeState, moveAction()),
            beforeState
        );
    });

});
