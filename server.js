const express = require('express');
const userRouter = require('./posts/postRouter');
const server = express();
//server.use(logger);

server.use('/api/users', userRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware
// function logger(req, res, next) {
  
//   console.log('Method: ', req.method, 'URL: ', req.url, 'TimeStamp: ', new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''));
//   next();
// }

module.exports = server;
