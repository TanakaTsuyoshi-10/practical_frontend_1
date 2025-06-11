// server.js
require('dotenv').config(); // .env の読み込み

const { createServer } = require('http');
const next = require('next');

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

console.log("NODE_ENV:", process.env.NODE_ENV); // 環境の確認（本番か開発か）
console.log("PORT:", port);                     // 使用ポートの確認
console.log("API_ENDPOINT:", process.env.NEXT_PUBLIC_API_ENDPOINT); // ← 追加したログ出力

app.prepare().then(() => {
  createServer((req, res) => {
    console.log(`Received request for ${req.url}`); // リクエストURLのログ
    handle(req, res);
  }).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});