# ベースイメージに Node.js 24 を使用
FROM node:24.13.1-slim

RUN npm install -g pnpm@11.4.0 \
  # ENOENT: no such file or directory, copyfile '/workspaces/next-template/.pnpm-store の対策のため
  && pnpm config set store-dir /tmp/pnpm/store

WORKDIR /app

# 依存関係のインストール
COPY ../ .

EXPOSE 3000
