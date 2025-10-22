import fetch from "node-fetch";
const sitemap = "https://tntlinebotseemyeyes.online/sitemap.xml";
try {
  await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemap)}`);
  await fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemap)}`);
  console.log("[ping-sitemap] notified Google & Bing");
} catch (e) {
  console.log("[ping-sitemap] failed:", e.message);
}
