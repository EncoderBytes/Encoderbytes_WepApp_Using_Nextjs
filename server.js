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

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = false; // ✅ FORCE PRODUCTION MODE
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running in PRODUCTION on port ${PORT}`);
  });
});

