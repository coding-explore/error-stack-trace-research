// const callsites = require('callsites')
import callsites from 'callsites';

// function b() {
//   console.log(callsites()[1].getFileName())
//   // file:///Users/huixisheng/Coding/github.com/coding-explore/error-stack-trace-research/nodejs/callsites/index.js
// }

// function a() {
//   b()
// }
// a()


function c (){
  console.log('c')
  // console.trace()
  console.log(callsites()[1].getFunctionName(), callsites()[1].getLineNumber());
  // b 23  b函数 23 行调用
}
function b (){
  console.log('b')
  c()
}
function a (){
  console.log('a')
  b()
}
a()