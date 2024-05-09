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

const setUpInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
};

module.exports = { 
  setUpInput 
}