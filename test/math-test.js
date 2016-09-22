import * as math from '../source/math';

import {
  __
} from 'intel-fp';

import {
  jasmine,
  describe,
  it,
  expect
} from './jasmine.js';

describe('math', () => {
  describe('lte', () => {
    it('should exist on math', () => {
      expect(math.lte).toEqual(jasmine.any(Function));
    });

    it('should be curried', () => {
      expect(math.lte(__, __)).toEqual(jasmine.any(Function));
    });

    it('should tell if a number is less than another', () => {
      expect(math.lte(4, 3)).toBe(true);
    });

    it('should tell if a number is equal to another', () => {
      expect(math.lte(3, 3)).toBe(true);
    });

    it('should tell if a number is greater than another', () => {
      expect(math.lte(3, 4)).toBe(false);
    });
  });

  describe('lt', () => {
    it('should exist on math', () => {
      expect(math.lt).toEqual(jasmine.any(Function));
    });

    it('should be curried', () => {
      expect(math.lt(__, __)).toEqual(jasmine.any(Function));
    });

    it('should tell if a number is less than another', () => {
      expect(math.lt(4, 3)).toBe(true);
    });

    it('should not tell if a number is equal to another', () => {
      expect(math.lt(3, 3)).toBe(false);
    });

    it('should tell if a number is greater than another', () => {
      expect(math.lt(3, 4)).toBe(false);
    });
  });

  describe('gte', () => {
    it('should exist on math', () => {
      expect(math.gte).toEqual(jasmine.any(Function));
    });

    it('should be curried', () => {
      expect(math.gte(__, __)).toEqual(jasmine.any(Function));
    });

    it('should tell if a number is greater than another', () => {
      expect(math.gte(3, 4)).toBe(true);
    });

    it('should tell if a number is equal to another', () => {
      expect(math.gte(3, 3)).toBe(true);
    });

    it('should tell if a number is less than another', () => {
      expect(math.gte(4, 3)).toBe(false);
    });
  });

  describe('gt', () => {
    it('should exist on math', () => {
      expect(math.gt).toEqual(jasmine.any(Function));
    });

    it('should be curried', () => {
      expect(math.gt(__, __)).toEqual(jasmine.any(Function));
    });

    it('should tell if a number is greater than another', () => {
      expect(math.gt(3, 4)).toBe(true);
    });

    it('should not tell if a number is equal to another', () => {
      expect(math.gt(3, 3)).toBe(false);
    });

    it('should tell if a number is less than another', () => {
      expect(math.gt(4, 3)).toBe(false);
    });
  });

  describe('times', () => {
    it('should exist on math', () => {
      expect(math.times).toEqual(jasmine.any(Function));
    });

    it('should be curried', () => {
      expect(math.times(__, __)).toEqual(jasmine.any(Function));
    });

    it('should perform the operation', function () {
      expect(math.times(3, 3)).toBe(9);
    });
  });

  describe('add', () => {
    it('should exist on math', () => {
      expect(math.add).toEqual(jasmine.any(Function));
    });

    it('should be curried', () => {
      expect(math.add(__, __)).toEqual(jasmine.any(Function));
    });

    it('should perform the operation', function () {
      expect(math.add(3, 3)).toBe(6);
    });
  });

  describe('minus', () => {
    it('should exist on math', () => {
      expect(math.minus).toEqual(jasmine.any(Function));
    });

    it('should be curried', () => {
      expect(math.minus(__, __)).toEqual(jasmine.any(Function));
    });

    it('should perform the operation', function () {
      expect(math.minus(3, 3)).toBe(0);
    });
  });

  describe('div', () => {
    it('should exist on math', () => {
      expect(math.div).toEqual(jasmine.any(Function));
    });

    it('should be curried', () => {
      expect(math.div(__, __)).toEqual(jasmine.any(Function));
    });

    it('should perform the operation', function () {
      expect(math.div(3, 3)).toBe(1);
    });
  });

  describe('averageBy', () => {
    it('should exist on math', () => {
      expect(math.averageBy)
        .toEqual(jasmine.any(Function));
    });

    it('should be curried', () => {
      expect(math.averageBy(__, __))
        .toEqual(jasmine.any(Function));
    });

    it('should perform the operation', () => {
      expect(math.averageBy(x => x, [1, 2, 3, 4, 5]))
        .toBe(3);
    });

    it('should average an empty list', () => {
      expect(math.averageBy(x => x, []))
        .toBe(0);
    });
  });

  describe('sumBy', () => {
    it('should exist on math', () => {
      expect(math.sumBy)
        .toEqual(jasmine.any(Function));
    });

    it('should be curried', () => {
      expect(math.sumBy(__, __))
        .toEqual(jasmine.any(Function));
    });

    it('should perform the operation', () => {
      expect(math.sumBy(x => x, [1, 2, 3, 4, 5]))
        .toBe(15);
    });

    it('should sum an empty list', () => {
      expect(math.averageBy(x => x, []))
        .toBe(0);
    });
  });
});
