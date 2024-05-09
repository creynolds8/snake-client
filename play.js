const net = require('net');
const connect = require('./client');
const readline = require('readline');
//const input = require('./input');

// const rl = readline.write({
//   input: process.input,
//   output: process.input,
// })

const handleUserInput = function(key) {
  if (key === '\u0003') process.exit()
  // switch ('data') {
  //   case '\u0003':
  //     process.exit()
  //   case 'w':
  //     conn.write('Move: up')
  //   case 's':
  //     conn.write('Move: down')
  //   case 'a':
  //     conn.write('Move: left')
  //   case 'd':
  //     conn.write('Move: right')
  //}
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
};

console.log('Connecting...');
connect();
setupInput();

module.exports = 'data';