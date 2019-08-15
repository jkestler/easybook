const app = require('./app');
const http = require('http');
const express = require('express');
const port = normalizePort(process.env.PORT || "5001");
const path = require('path');

app.set("port", port);

const server = http.createServer(app);

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}




server.listen(port);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    if (err) {
      res.status(500).send(err);
    }
  });
}

server.on("listening", () => {
  console.log(`server is listening for requests on port ${server.address().port}`);
});




// app.listen(port, (req, res) => {
//   console.log(`server listening on port: ${port}`);
// });