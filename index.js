var Timer = require('./Timer');
var timer = new Timer();

timer.on('tick', tickHandler);

var timer2 = new Timer();

timer2.on('tick',function() {
  process.stdout.write('tock\n');
});

function tickHandler(event){
  process.stdout.write('tick ' + this.i + '\n');
  if(this.i == 5){
    this.removeListener('tick', tickHandler);
  }
}
// var myVar = "myValue";

// // global.myVar = myVar;

// console.log(exports === module.exports);

// function fn1() {

// }

// function fn2() {

// }

// exports.foo = fn1;
// exports.bar = fn2;

// // module.exports = {
// //   value: 'myValue'
// // };