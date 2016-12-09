'use strict';

var stream = require('stream');

class Bipolar extends stream.Transform {
  constructor(seed) {
    super(seed);

    this.store = parseFloat(seed) || 0;
  }

  _transform(chunk, encoding, callback) {
    const input = parseFloat(chunk);
    const delta = (input - this.store) * 0.01;

    this.store = input;

    callback(null, delta.toString());
  }
}

module.exports = Bipolar;
