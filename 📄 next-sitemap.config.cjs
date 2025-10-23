/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tntlinebotseemyeyes.online',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.8,
  autoLastmod: true,
  exclude: ['/404', '/api/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/404'] },
    ],
    additionalSitemaps: [
      'https://tntlinebotseemyeyes.online/sitemap.xml',
    ],
  },
};
