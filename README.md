# seo-site-pro-ultimate

功能：
- Google 熱搜自動更新 SEO（build、API、GitHub Actions 三重保險）
- 圖片壓縮（sharp）
- 站圖產生與自動 Ping Google/Bing
- 小字連結 + 圖片燈箱預覽
- 背景圖：/public/uploads/bg.jpg

本地：
npm install
npm run dev

部署（Vercel）：
- 直接上傳整包或連結 GitHub
- vercel.json 已排程每日 08:00 觸發 /api/refresh-seo

GitHub Actions：
- .github/workflows/auto-seo.yml 每日執行，提交變更並 ping sitemap
