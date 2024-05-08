const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.on('connect', () => {
    conn.write('Name: CAR');
    conn.write('Move: up')
    console.log('Connected!');
  });
  conn.on('data', data => {
    console.log(data);
  })
  conn.setEncoding('utf8');
  return conn;
};

module.exports = connect;