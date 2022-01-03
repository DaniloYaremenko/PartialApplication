'use strict';

const tagged = (pref, str) => `[${pref}] ${str}`;
const tagDate = (string) => {
  const date = new Date();
  const beautifulDate = date.toISOString();
  return beautifulDate + ' ' + string;
};
module.exports = { tagDate };
console.log(tagDate('da'))