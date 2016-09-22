// @flow

//
// INTEL CONFIDENTIAL
//
// Copyright 2013-2016 Intel Corporation All Rights Reserved.
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

import * as fp from 'intel-fp';

export const lte = fp.curry2((b:number, a:number) => a <= b);

export const lt = fp.curry2((b:number, a:number) => a < b);

export const gte = fp.curry2((b:number, a:number) => a >= b);

export const gt = fp.curry2((b:number, a:number) => a > b);

export const times = fp.curry2((a:number, b:number) => a * b);

export const add = fp.curry2((a:number, b:number) => a + b);

export const minus = fp.curry2((a:number, b:number) => a - b);

export const div = fp.curry2((a:number, b:number) => a / b);

type numberToNumberT = (x:number) => number;

export const sumBy = fp.curry2((fn:numberToNumberT, xs:number[]) =>
  xs
    .map(fn)
    .reduce((a, b) => a + b, 0)
);

export const averageBy = fp.curry2((fn:(x:number) => number, xs:number[]) => {
  if (xs.length === 0)
    return 0;

  return sumBy(fn, xs) / xs.length;
});
