const server = require('./api/server.js');

server.listen(process.env.PORT, () => {
  console.log(`Server Running on ${process.env.PORT}`);
});
