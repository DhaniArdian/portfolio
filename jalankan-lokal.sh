#!/usr/bin/env bash
# Jalankan portofolio Dhani di komputer lokal.
set -e
cd "$(dirname "$0")"

if [ ! -d node_modules ]; then
  echo "Memasang dependensi (sekali saja)..."
  npm install
fi

echo ""
echo "Portofolio berjalan di: http://localhost:5173"
echo "Tekan Ctrl+C untuk menghentikan."
echo ""

npm run dev -- --port 5173 --open
