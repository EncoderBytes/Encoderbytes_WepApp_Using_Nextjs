// const { createServer } = require('http');
// const { parse } = require('url');
// const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   createServer((req, res) => {
//     const parsedUrl = parse(req.url, true);
//     handle(req, res, parsedUrl);
//   }).listen(process.env.PORT || 3000, (err) => {
//     if (err) throw err;
//     console.log(`Server running on port ${process.env.PORT || 3000}`);
//   });
// });

// Production
const next = require("next");
const { createServer } = require("http");

const port = process.env.PORT || 3000;
const dev = false; // always production on cPanel

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, () => {
    console.log("Next.js app running on port " + port);
  });
});


