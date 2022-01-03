'use strict';

const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

const curry = (length, fn) => (...args) => {
  if (length !== 1) {
    const func = fn.bind(null, ...args);
    return curry(length - 1, func);
  } else {
      return fn(...args)
  }
};
const press = curry(4, checkPin);

module.exports = { press };
