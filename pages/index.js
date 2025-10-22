import fs from "fs";
import path from "path";
import SEO from "@/components/SEO";

export async function getStaticProps() {
  const root = process.cwd();
  const data = JSON.parse(fs.readFileSync(path.join(root, "data", "content.json"), "utf8"));
  const meta = JSON.parse(fs.readFileSync(path.join(root, "data", "seo.json"), "utf8"));
  if (meta.image && !meta.image.startsWith("http")) meta.image = (meta.url || "") + meta.image;
  return { props: { data, meta } };
}

export default function Home({ data, meta }) {
  return (
    <>
      <SEO meta={meta} />

      <nav className="nav">
        <div className="container nav-inner">
          <div style={{ fontWeight: 700 }}>{data.brand}</div>
          <div className="small">關於我們 ・ 服務 ・ 作品 ・ 聯絡</div>
        </div>
      </nav>

      <header className="container hero">
        <div>
          <h1>{data.hero.title}</h1>
          <p>{data.hero.subtitle}</p>
          {data.hero.cta && (
            <a
              className="btn primary"
              href={data.hero.cta.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.hero.cta.label}
            </a>
          )}
        </div>
        <img className="hero-img" src={data.hero.image} alt={data.hero.title} />
      </header>

      {/* 其餘服務業務區塊 */}
      <section id="services" className="section">
        <div className="container">
          <h2>{data.services.title}</h2>
          <div className="grid-3">
            {data.services.items.map((s, i) => (
              <div className="card" key={i}>
                <img src={s.image} alt={s.title} />
                <div className="body">
                  <h3 style={{ margin: "0 0 6px 0" }}>{s.title}</h3>
                  <p className="small">{s.description}</p>
                  {s.link && (
                    <a
                      className="btn"
                      style={{ marginTop: 10 }}
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      前往
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心推薦區塊 */}
      <section id="portfolio" className="section portfolio">
        <div className="container">
          <h2>{data.portfolio.title}</h2>
          <div className="grid-3">
            {data.portfolio.items.map((p, i) => (
              <div className="card" key={i}>
                <img src={p.image} alt={p.title} />
                <div className="body">
                  <h3 style={{ margin: "0 0 6px 0" }}>
                    {p.title} {p.badge && <span className="badge">{p.badge}</span>}
                  </h3>
                  <p className="small">{p.description}</p>
                  {p.link && (
                    <a
                      className="btn"
                      style={{ marginTop: 10 }}
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      前往
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 聯絡表單區塊 */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2>聯絡我們</h2>
          <p className="small" style={{ marginBottom: 20 }}>
            留下需求與聯絡方式，我們將盡快回覆。
          </p>
          <form action="https://formsubmit.co/you@example.com" method="POST">
            <input type="hidden" name="_subject" value="網站聯絡表單" />
            <input type="text" name="name" placeholder="您的姓名" required />
            <input type="email" name="email" placeholder="電子郵件" required />
            <textarea name="message" rows="4" placeholder="需求內容" required></textarea>
            <button className="btn primary" type="submit">
              送出
            </button>
          </form>
          <p className="small" style={{ marginTop: 10 }}>
            提示：將上方 `you@example.com` 改成你的 email 即可收信。
          </p>
        </div>
      </section>

      <footer>
        <div className="container small">© {new Date().getFullYear()} 不正常人類研究中心</div>
      </footer>
    </>
  );
}
