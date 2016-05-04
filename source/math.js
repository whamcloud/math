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

import {curry} from 'intel-fp';

export const lte = curry(2, (b:number, a:number) => a <= b);

export const lt = curry(2, (b:number, a:number) => a < b);

export const gte = curry(2, (b:number, a:number) => a >= b);

export const gt = curry(2, (b:number, a:number) => a > b);

export const times = curry(2, (a:number, b:number) => a * b);

export const add = curry(2, (a:number, b:number) => a + b);

export const minus = curry(2, (a:number, b:number) => a - b);

export const div = curry(2, (a:number, b:number) => a / b);
