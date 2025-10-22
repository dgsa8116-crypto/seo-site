import fs from 'fs';
import path from 'path';

const root = process.cwd();
const seoPath = path.join(root, 'data', 'seo.json');
const trendsPath = path.join(root, 'data', 'trends.json');

const seo = JSON.parse(fs.readFileSync(seoPath, 'utf8'));
let trends = [];

if (fs.existsSync(trendsPath)) {
  try {
    const t = JSON.parse(fs.readFileSync(trendsPath, 'utf8'));
    trends = (t.keywords || []).slice(0, 10);
  } catch {
    console.warn('[generate-meta] trends.json parse failed, skip.');
  }
}

if (trends.length) {
  const base = (seo.keywords || []);
  const merged = Array.from(new Set([...trends, ...base])).slice(0, 20);
  seo.keywords = merged;
  seo.description = (seo.description?.split('｜')[0] || seo.description) + `｜今日關鍵：${trends[0]}`;
  fs.writeFileSync(seoPath, JSON.stringify(seo, null, 2), 'utf8');
  console.log('[generate-meta] keywords updated from trends:', trends.slice(0,5).join(', '));
} else {
  console.log('[generate-meta] no trends found, keep existing seo.json');
}
