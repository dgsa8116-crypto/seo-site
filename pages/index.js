import Head from "next/head";

export default function Links() {
  const siteUrl = "https://tntlinebotseemyeyes.online";
  const title = "TNT Line Bot 導覽中心";
  const description = "10 個 AI 工具與專案入口，整合智能應用與實例展示。";

  const links = [
    {
      title: "AI 視覺辨識",
      description: "體驗即時影像識別與物件偵測。",
      url: "https://example1.com",
    },
    {
      title: "語音助理",
      description: "以自然語音與 AI 對話。",
      url: "https://example2.com",
    },
    {
      title: "AI 翻譯中心",
      description: "快速翻譯文字、圖片與語音內容。",
      url: "https://example3.com",
    },
    {
      title: "資料視覺化",
      description: "將數據轉換為互動式圖表。",
      url: "https://example4.com",
    },
    {
      title: "智慧客服",
      description: "部署自動客服系統，減少人工負擔。",
      url: "https://example5.com",
    },
    {
      title: "情緒分析",
      description: "辨識使用者文字情緒，優化回應策略。",
      url: "https://example6.com",
    },
    {
      title: "AI 圖像生成",
      description: "使用生成式 AI 創造圖片與藝術作品。",
      url: "https://example7.com",
    },
    {
      title: "SEO 監測工具",
      description: "追蹤搜尋排名與關鍵字表現。",
      url: "https://example8.com",
    },
    {
      title: "智慧行銷助手",
      description: "自動化社群與電子報投放策略。",
      url: "https://example9.com",
    },
    {
      title: "開發者文件中心",
      description: "查看 API 與 SDK 教學文件。",
      url: "https://example10.com",
    },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI, Line Bot, 工具, 智能, SEO" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={siteUrl} />
      </Head>

      <main
        style={{
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          padding: "50px 20px",
          backgroundColor: "#fafafa",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>{title}</h1>
        <p style={{ color: "#555", marginBottom: "40px" }}>{description}</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {links.map((link, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>
                {link.title}
              </h2>
              <p style={{ fontSize: "14px", color: "#666" }}>
                {link.description}
              </p>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "15px",
                  padding: "10px 20px",
                  backgroundColor: "#0070f3",
                  color: "#fff",
                  textDecoration: "none",
                  borderRadius: "8px",
                }}
              >
                前往
              </a>
            </div>
          ))}
        </div>

        <footer style={{ marginTop: "60px", fontSize: "14px", color: "#777" }}>
          <p>© {new Date().getFullYear()} TNT Line Bot - 導覽中心</p>
        </footer>
      </main>
    </>
  );
}
