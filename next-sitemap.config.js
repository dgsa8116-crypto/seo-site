/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tntlinebotseemyeyes.online',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/404'],
  outDir: 'out',

  // ✅ 禁用 routes-manifest 掃描（防止 Vercel 錯誤）
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => [],
};
