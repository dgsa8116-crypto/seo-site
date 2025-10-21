import Head from "next/head";

export default function Home() {
  const siteUrl = "https://tntlinebotseemyeyes.online";
  const title = "TNT Line Bot - See My Eyes";
  const description =
    "智慧 AI Line Bot，提供影像辨識與即時互動，SEO 最佳化網站範例。";
  const image = `${siteUrl}/og-image.png`;

  // JSON-LD 結構化資料
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    url: siteUrl,
    description: description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Head>
        {/* --- 基本 SEO --- */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI, Line Bot, 視覺辨識, SEO, Next.js" />

        {/* --- Open Graph / Social --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:locale" content="zh_TW" />

        {/* --- Twitter Cards --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* --- JSON-LD 結構化資料 --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <link rel="canonical" href={siteUrl} />
      </Head>

      <main style={{ textAlign: "center", padding: "50px" }}>
        <h1>TNT Line Bot - See My Eyes</h1>
        <p style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
          智慧 AI Line Bot，透過影像辨識技術協助你觀察世界。<br />
          本網站示範如何建立 SEO 友善的 Next.js 靜態網站。
        </p>

        <section style={{ marginTop: "40px" }}>
          <h2>特色功能</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>✔️ 即時影像辨識與回應</li>
            <li>✔️ 結合 LINE Messaging API</li>
            <li>✔️ 具備 sitemap 與 robots.txt</li>
            <li>✔️ 符合 Google SEO 最佳實踐</li>
          </ul>
        </section>

        <footer style={{ marginTop: "50px", fontSize: "14px", color: "#555" }}>
          <p>© {new Date().getFullYear()} TNT Line Bot - See My Eyes</p>
        </footer>
      </main>
    </>
  );
}
