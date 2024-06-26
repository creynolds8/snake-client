let connection;

const handleUserInput = function(key) {
  switch (key) {
    case '\u0003':
      //ctrl + c
      process.exit();
      break;
    case '\u0077':
      //  w
      connection.write('Move: up');
      break;
    case '\u0073':
      //  d
      connection.write('Move: down');
      break;
    case '\u0061':
      //  a
      connection.write('Move: left');
      break;
    case '\u0064':
      //  d
      connection.write('Move: right');
      break;
    case '\u0071':
      //  q
      connection.write('Say: i am snek lord');
      break;
    case '\u0065':
      //  e
      connection.write('Say: i will be the very best...');
      break;
    case '\u0072':
      //  r
      connection.write('Say: ..like no one ever was!');
  }
};

const setUpInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = setUpInput;