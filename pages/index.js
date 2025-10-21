import Head from "next/head";

export default function Links() {
  const siteUrl = "https://tntlinebotseemyeyes.online";
  const title = "不正常人類研究中心";
  const description = "多個娛樂城入口，整合多個代理與相關資訊。";

  // 前 4 個：可點擊連結
  const activeLinks = [
    {
      title: "智能客服聯繫中心",
      description: "體驗即時的客服服務。",
      url: "https://line.me/R/ti/p/@bec168",
    },
    {
      title: "becgame註冊地址",
      description: "快速前往註冊頁面。",
      url: "https://becgame88168.com/?uffr=dgsa001",
    },
    {
      title: "天眼通真人百家預測程式試用",
      description: "體驗百家樂預測工具。",
      url: "https://line.me/R/ti/p/@622bugzl",
    },
    {
      title: "天眼通客服序號申請服務中心",
      description: "點選即可申請使用。",
      url: "https://line.me/R/ti/p/@564lzkqd",
    },
  ];

  // 其他 6 個：圖片 + 解說
  const infoBlocks = [
    {
      title: "AI 智能數據中心",
      description: "展示 AI 模型訓練與監控架構。",
      img: "/images/ai-center.jpg",
    },
    {
      title: "玩家行為分析",
      description: "可視化玩家行為與互動軌跡。",
      img: "/images/player-analysis.jpg",
    },
    {
      title: "預測引擎展示",
      description: "AI 模型實時預測數據結果。",
      img: "/images/predict-engine.jpg",
    },
    {
      title: "系統安全防護牆",
      description: "保障資料與流量安全的多層防護。",
      img: "/images/security-wall.jpg",
    },
    {
      title: "自動化管理平台",
      description: "集中控制與維運監控系統。",
      img: "/images/auto-console.jpg",
    },
    {
      title: "用戶介面展示",
      description: "設計簡潔的操作介面與功能模組。",
      img: "/images/ui-demo.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="娛樂城, Line Bot, AI, 研究中心" />
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

        {/* 前四個：可點擊連結 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto 60px",
          }}
        >
          {activeLinks.map((link, index) => (
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

        {/* 後六個：圖片 + 解說 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {infoBlocks.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "140px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "15px" }}>
                <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#666" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <footer style={{ marginTop: "60px", fontSize: "14px", color: "#777" }}>
          <p>© {new Date().getFullYear()} 不正常人類研究中心</p>
        </footer>
      </main>
    </>
  );
}
