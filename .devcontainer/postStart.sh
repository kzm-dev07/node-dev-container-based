#!/bin/bash
set -e

# CA証明書のインストール（HTTPS通信でのSSL検証エラー対策 codespace用）
apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates \
  && rm -rf /var/lib/apt/lists/*

# gitのページャー設定
git config --global core.pager cat

# gitのエディタ設定
git config --global core.editor 'code --wait'
