const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('light', () => {
  console.log('Turn off the light');
  setTimeout(() => {
    console.log('light');
  }, 3000);
});
console.log("script is running ")
console.log("script is stil running ")

myEmitter.emit('light');

// const EventEmitter = require('node:events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('waterfull', () => {
//   console.log('an event occurred!');
//   setTimeout(()=>{
//     console.log("My name is ramesh")
//   },3000)
// });
// myEmitter.emit('waterfull');