import fs from "fs";
import path from "path";
import { useState } from "react";
import SEO from "@/components/SEO";

export async function getStaticProps() {
  const root = process.cwd();
  const data = JSON.parse(fs.readFileSync(path.join(root, "data", "content.json"), "utf8"));
  const meta = JSON.parse(fs.readFileSync(path.join(root, "data", "seo.json"), "utf8"));
  if (meta.image && !meta.image.startsWith('http')) {
    meta.image = (meta.url || '') + meta.image;
  }
  return { props: { data, meta } };
}

export default function Home({ data, meta }) {
  const [preview, setPreview] = useState(null);

  return (
    <>
      <SEO meta={meta} />

      <main className="container">
        <h1 style={{ marginBottom: 8 }}>{data.brand}</h1>
        <p style={{ marginBottom: 28, opacity: .9 }}>{data.tagline}</p>

        <div className="grid grid-4" style={{ marginBottom: 40 }}>
          {data.links.map((link, i) => (
            <div className="card" key={i}>
              <div className="inner">
                <h2 style={{ fontSize: 18 }}>{link.title}</h2>
                <p style={{ fontSize: 14, opacity: .9 }}>{link.description}</p>
                {link.url ? (
                  <a className="btn" href={link.url} target="_blank" rel="noopener noreferrer">前往</a>
                ) : null}
                {link.badge ? <span className="badge">{link.badge}</span> : null}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-4">
          {data.blocks.map((b, i) => (
            <div className="card" key={i}>
              <img
                className="resp"
                src={b.img}
                alt={b.title}
                style={{ cursor: "zoom-in" }}
                onClick={() => setPreview(b.img)}
              />
              <div className="inner">
                <h3 style={{ fontSize: 16 }}>{b.title}</h3>
                <p style={{ fontSize: 13, opacity: .9 }}>{b.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="footer">
          <p>© {new Date().getFullYear()} 不正常人類研究中心</p>
        </div>
      </main>

      {preview && (
        <div
          onClick={() => setPreview(null)}
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <img
            src={preview}
            alt="preview"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "12px",
              boxShadow: "0 0 20px rgba(0,0,0,0.5)",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </>
  );
}