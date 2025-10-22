# seo-site-pro

- 靜態輸出：`output: 'export'`
- 背景圖：覆蓋 `/public/uploads/bg.jpg`
- 內容：`/data/content.json`
- SEO：`/data/seo.json`（每日 GitHub Action 依 Google 熱搜自動合併關鍵字）

## 開發
```bash
npm install
npm run dev
```

## 部署
推送到 GitHub，綁定 Vercel 即可。

## 自動 SEO
- GitHub Actions (`.github/workflows/trends.yml`) 每天 02:00 UTC 抓取台灣 Google 熱搜，寫入 `data/trends.json`，並更新 `data/seo.json`，推回 repo 觸發 Vercel 重建。
