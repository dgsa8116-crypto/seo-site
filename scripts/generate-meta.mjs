import fs from "fs";
import path from "path";
import fetch from "node-fetch";

const seoPath = path.join(process.cwd(), "data", "seo.json");

async function getTrendsTW() {
  const r = await fetch("https://trends.google.com/trends/api/dailytrends?geo=TW");
  const text = await r.text();
  try {
    const json = JSON.parse(text.replace(/^\)]}'\n?/, ""));
    return json?.default?.trendingSearchesDays?.[0]?.trendingSearches?.map(t => t.title.query) || [];
  } catch {
    return [];
  }
}

try {
  const trends = await getTrendsTW();
  if (trends.length) {
    const seo = JSON.parse(fs.readFileSync(seoPath, "utf8"));
    seo.keywords = Array.from(new Set([...(seo.keywords || []), ...trends])).slice(0, 20);
    seo.description = `目前熱門搜尋詞（TW）：${trends.slice(0, 5).join("、")}。`;
    fs.writeFileSync(seoPath, JSON.stringify(seo, null, 2), "utf8");
    console.log("[generate-meta] updated", trends.slice(0,5).join(", "));
  } else {
    console.log("[generate-meta] no trends returned");
  }
} catch (e) {
  console.log("[generate-meta] failed:", e.message);
}
