/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tntlinebotseemyeyes.online',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/404'],
  // ✅ 新增這行讓 next-sitemap 自動找到新的輸出資料夾
  outDir: 'out',
};
