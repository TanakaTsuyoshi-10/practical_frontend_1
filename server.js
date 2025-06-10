// server.js
require('dotenv').config(); // ← .env の読み込みを追加

const { createServer } = require('http');
const next = require('next');

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // リクエストURLのログを出力（デバッグ用、任意）
    console.log(`Received request for ${req.url}`);
    handle(req, res);
  }).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});