import Head from "next/head";
export default function SEO({ meta }){
  const {
    title = "天眼通III不正常人類研究中心｜娛樂交流｜百家樂學術研究｜AI預測程式",
    description = "獨家技術｜絕非市面上氾濫計算機算法，帶入AI學習演算法｜多種判定引擎｜給你滿滿的高優質體驗",
    url = "https://tntlinebotseemyeyes.online",
    image = "/og-image.png"
  } = meta || {};
  const img = image?.startsWith("http") ? image : url + image;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#00e5ff" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}