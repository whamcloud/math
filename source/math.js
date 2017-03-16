// @flow

//
// INTEL CONFIDENTIAL
//
// Copyright 2013-2017 Intel Corporation All Rights Reserved.
//
// The source code contained or described herein and all documents related
// to the source code ("Material") are owned by Intel Corporation or its
// suppliers or licensors. Title to the Material remains with Intel Corporation
// or its suppliers and licensors. The Material contains trade secrets and
// proprietary and confidential information of Intel or its suppliers and
// licensors. The Material is protected by worldwide copyright and trade secret
// laws and treaty provisions. No part of the Material may be used, copied,
// reproduced, modified, published, uploaded, posted, transmitted, distributed,
// or disclosed in any way without Intel's prior express written permission.
//
// No license under any patent, copyright, trade secret or other intellectual
// property right is granted to or conferred upon you by disclosure or delivery
// of the Materials, either expressly, by implication, inducement, estoppel or
// otherwise. Any license under such intellectual property rights must be
// express and approved by Intel in writing.

export const lte = (b: number, a: number) => a <= b;

export const lt = (b: number, a: number) => a < b;

export const gte = (b: number, a: number) => a >= b;

export const gt = (b: number, a: number) => a > b;

export const times = (a: number, b: number) => a * b;

export const add = (a: number, b: number) => a + b;

export const minus = (a: number, b: number) => a - b;

export const div = (a: number, b: number) => a / b;

type anyToNumberT = (x: any) => number;

export const minBy = (fn: anyToNumberT, xs: number[]) => {
  if (xs.length === 0) return 0;

  return xs.map(fn).reduce((a, b) => lte(a, b) ? b : a);
};

export const maxBy = (fn: anyToNumberT, xs: number[]) =>
  xs.map(fn).reduce((a, b) => gte(a, b) ? b : a, 0);

export const sumBy = (fn: anyToNumberT, xs: number[]) =>
  xs.map(fn).reduce((a, b) => a + b, 0);

export const averageBy = (fn: anyToNumberT, xs: number[]) => {
  if (xs.length === 0) return 0;

  return sumBy(fn, xs) / xs.length;
};
