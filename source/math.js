// @flow

//
// Copyright (c) 2017 Intel Corporation. All rights reserved.
// Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

export const lte = (b: number, a: number) => a <= b;

export const lt = (b: number, a: number) => a < b;

export const gte = (b: number, a: number) => a >= b;

export const gt = (b: number, a: number) => a > b;

export const times = (a: number, b: number) => a * b;

export const add = (a: number, b: number) => a + b;

export const minus = (a: number, b: number) => a - b;

export const div = (a: number, b: number) => a / b;

type anyToNumberT = (x: any) => number;

export const minBy = <T>(fn: anyToNumberT, xs: T[]) => {
  if (xs.length === 0) return 0;

  return xs.map(fn).reduce((a, b) => (lte(a, b) ? b : a));
};

export const maxBy = <T>(fn: anyToNumberT, xs: T[]) =>
  xs.map(fn).reduce((a, b) => (gte(a, b) ? b : a), 0);

export const sumBy = <T>(fn: anyToNumberT, xs: T[]) =>
  xs.map(fn).reduce((a, b) => a + b, 0);

export const averageBy = <T>(fn: anyToNumberT, xs: T[]) => {
  if (xs.length === 0) return 0;

  return sumBy(fn, xs) / xs.length;
};
