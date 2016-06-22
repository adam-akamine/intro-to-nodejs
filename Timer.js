var EventEmitter = require('events');
var util = require('util');
module.exports = Timer;

function Timer() {
  EventEmitter.call(this);

  var self = this;
  var i = 0;

  setInterval(function () {
    self.emit('tick', { interval : i++ });
  }, 1000);
}

util.inherits(Timer, EventEmitter);