const { conn }= require('./client');
const { setUpInput }= require('./input');

console.log('Connecting...');
setUpInput(conn);