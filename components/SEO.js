import Head from "next/head";
export default function SEO({ meta }) {
  const { title, description, keywords, url, image, jsonLd } = meta || {};
  return (
    <Head>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
      {keywords?.length ? <meta name="keywords" content={keywords.join(', ')} /> : null}
      <meta property="og:type" content="website" />
      {title ? <meta property="og:title" content={title} /> : null}
      {description ? <meta property="og:description" content={description} /> : null}
      {url ? <meta property="og:url" content={url} /> : null}
      {image ? <meta property="og:image" content={image} /> : null}
      <meta property="og:locale" content="zh_TW" />
      <meta name="twitter:card" content="summary_large_image" />
      {title ? <meta name="twitter:title" content={title} /> : null}
      {description ? <meta name="twitter:description" content={description} /> : null}
      {image ? <meta name="twitter:image" content={image} /> : null}
      {url ? <link rel="canonical" href={url} /> : null}
      {jsonLd ? (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />) : null}
    </Head>
  );
}
