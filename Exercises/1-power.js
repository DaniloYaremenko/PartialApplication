'use strict';

const power = (exp, n) => (--exp ? n * power(exp, n) : n);


const square = (n) => power(2, n);

const cube = power.bind(null, 3);

module.exports = { power, square, cube };
