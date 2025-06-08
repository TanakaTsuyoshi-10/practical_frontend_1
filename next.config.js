require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // ← 追加：Azureデプロイ用に必要
  env: {
    // .env ファイルから環境変数をビルド時に注入
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
};

module.exports = nextConfig;