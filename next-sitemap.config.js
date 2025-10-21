/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tntlinebotseemyeyes.online',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/404'],
  outDir: 'out',

  // ✅ 關閉舊版 routes-manifest 掃描
  generateIndexSitemap: true,
  autoLastmod: false,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
