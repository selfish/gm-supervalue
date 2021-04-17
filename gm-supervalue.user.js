// ==UserScript==
// @name            SuperValue
// @description     Safe GM_setValue and GM_getValue
// @namespace       github.com/selfish/gm-supervalue
// ==/UserScript==

/*
 *    Super GM_setValue and GM_getValue
 *
 *    This library extends the Greasemonkey GM_setValue and GM_getValue functions to
 *    handle any javascript variable type.
 *
 *    Add it to your GM script with:
 *        // @require https://raw.githubusercontent.com/selfish/gm-supervalue/master/gm-supervalue.user.js
 *
 *    Usage:
 *        GM_SuperValue.set           (varName, varValue);
 *        const x = GM_SuperValue.get   (varName, defaultValue);
 *
 *    Initially based on http://userscripts-mirror.org/scripts/review/107941
 *
 */

/* globals GM_getValue, GM_setValue */

class GM_SuperValue {
  constructor() {
    this.prefix = "GM";
  }

  get(key, fallback = undefined) {
    key = this.validateKey(key);
    const raw = GM_getValue(key);
    return this.decode(raw) || fallback;
  }

  set(key, value) {
    key = this.validateKey(key);
    GM_setValue(key, this.encode(value))
  }

  encode(value) {
    return JSON.stringify(value)
  }

  decode(value) {
    return JSON.parse(value)
  }

  validateKey(key) {
    if (typeof key !== "string") throw new Error('invalid key name: not a string');
    if (!/^[a-zA-z0-9_-]*$/.test(key)) throw new Error('Invalid key name provided should use [a-zA-z0-9_-]');
    return `${this.prefix}--${key}`
  }
}
