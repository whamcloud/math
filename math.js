/* @flow */

import {curry} from './fp';

export const lte = curry(2, (b: number, a: number) => a <= b);

export const lt = curry(2, (b: number, a: number) => a < b);

export const gte = curry(2, (b: number, a: number) => a >= b);

export const gt = curry(2, (b: number, a: number) => a > b);

export const times = curry(2, (a: number, b: number) => a * b);

export const add = curry(2, (a: number, b: number) => a + b);

export const minus = curry(2, (a: number, b: number) => a - b);

export const div = curry(2, (a: number, b: number) => a / b);
