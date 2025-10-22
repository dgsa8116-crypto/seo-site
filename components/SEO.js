import Head from "next/head";
export default function SEO({ meta }){
  const {
    title = "不正常人類研究中心",
    description = "AI / 科技導覽站，賽博霓虹風展示。",
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
      {/* OG */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
