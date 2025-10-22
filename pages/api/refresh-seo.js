import fs from "fs";
import path from "path";
import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const trendsRes = await fetch("https://trends.google.com/trends/hottrends/visualize/internal/data/en");
    const json = await trendsRes.json();
    const words = json.flatMap(r => r.trends).slice(0, 10).map(t => t.title.trim());
    if (words.length) {
      const seoPath = path.join(process.cwd(), "data", "seo.json");
      const seo = JSON.parse(fs.readFileSync(seoPath, "utf8"));
      seo.keywords = Array.from(new Set([...(seo.keywords || []), ...words])).slice(0, 20);
      seo.description = `目前熱門搜尋詞：${words.slice(0, 5).join("、")}。`;
      try { fs.writeFileSync(seoPath, JSON.stringify(seo, null, 2), "utf8"); } catch {}
    }
    // Ping sitemap
    const sitemap = "https://tntlinebotseemyeyes.online/sitemap.xml";
    await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemap)}`).catch(()=>{});
    await fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemap)}`).catch(()=>{});

    res.json({ ok: true, keywords: words.slice(0,5) });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
}
