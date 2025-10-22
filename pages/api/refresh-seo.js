import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    const r = await fetch("https://trends.google.com/trends/api/dailytrends?geo=TW");
    const body = await r.text();
    const json = JSON.parse(body.replace(/^\)]}'\n?/, ""));
    const words = json?.default?.trendingSearchesDays?.[0]?.trendingSearches?.map(t => t.title.query) || [];
    if (words.length) {
      const seoPath = path.join(process.cwd(), "data", "seo.json");
      const seo = JSON.parse(fs.readFileSync(seoPath, "utf8"));
      seo.keywords = Array.from(new Set([...(seo.keywords || []), ...words])).slice(0, 25);
      seo.description = `目前熱門搜尋詞（TW）：${words.slice(0, 5).join("、")}。`;
      try { fs.writeFileSync(seoPath, JSON.stringify(seo, null, 2), "utf8"); } catch {}
    }
    const sitemap = "https://tntlinebotseemyeyes.online/sitemap.xml";
    await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemap)}`).catch(()=>{});
    await fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemap)}`).catch(()=>{});
    res.json({ ok: true, sample: words.slice(0,5) });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
}
