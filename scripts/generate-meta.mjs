import fs from "fs";
import path from "path";
import fetch from "node-fetch";

const seoPath = path.join(process.cwd(), "data", "seo.json");

async function getGoogleTrends() {
  try {
    const res = await fetch("https://trends.google.com/trends/hottrends/visualize/internal/data/en");
    const json = await res.json();
    return json.flatMap(region => region.trends).slice(0, 10).map(t => t.title.trim());
  } catch (err) {
    console.error("[generate-meta] failed to fetch trends", err);
    return [];
  }
}

const trends = await getGoogleTrends();
if (trends.length) {
  const seo = JSON.parse(fs.readFileSync(seoPath, "utf8"));
  seo.keywords = Array.from(new Set([...(seo.keywords || []), ...trends])).slice(0, 20);
  seo.description = `目前熱門搜尋詞：${trends.slice(0, 5).join("、")}。`;
  fs.writeFileSync(seoPath, JSON.stringify(seo, null, 2), "utf8");
  console.log("[generate-meta] updated", trends.slice(0,5).join(", "));
} else {
  console.log("[generate-meta] no trends found");
}
