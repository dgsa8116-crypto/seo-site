import fs from 'fs';
import path from 'path';
import SEO from '@/components/SEO';

export async function getStaticProps() {
  const root = process.cwd();
  const data = JSON.parse(fs.readFileSync(path.join(root, 'data', 'content.json'), 'utf8'));
  const meta = JSON.parse(fs.readFileSync(path.join(root, 'data', 'seo.json'), 'utf8'));
  if (meta.image && !meta.image.startsWith('http')) meta.image = (meta.url || '') + meta.image;
  return { props: { data, meta } };
}

export default function Home({ data, meta }){
  return (
    <>
      <SEO meta={meta} />
      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand"><span className="dot"></span>{data.brand}</div>
          <div className="small muted">關於我們 ・ 服務 ・ 作品 ・ 聯絡</div>
        </div>
      </nav>

      <header className="container hero">
        <div className="hero-text">
          <h1>{data.hero.title}</h1>
          <p className="muted">{data.hero.subtitle}</p>
          {data.hero?.cta && (
            <a className="btn primary" href={data.hero.cta.href} target="_blank" rel="noopener noreferrer">
              {data.hero.cta.label}
            </a>
          )}
          <div className="scanline"></div>
        </div>
        <div className="hero-visual">
          <img className="hero-img" src={data.hero.image} alt={data.hero.title} />
          <div className="glow"></div>
          <div className="grid-anim"></div>
        </div>
      </header>

      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">{data.services.title}</h2>
          <div className="grid-3">
            {data.services.items.map((s, i) => (
              <div className="card" key={i}>
                <div className="shine"></div>
                <img src={s.image} alt={s.title} />
                <div className="body">
                  <h3>{s.title}</h3>
                  <p className="small muted">{s.description}</p>
                  {s.link && (
                    <a className="btn" style={{ marginTop: 10 }} href={s.link} target="_blank" rel="noopener noreferrer">前往</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="container">
          <h2 className="section-title">{data.portfolio.title}</h2>
          <div className="grid-3">
            {data.portfolio.items.map((p, i) => (
              <div className="card" key={i}>
                <div className="shine"></div>
                <img src={p.image} alt={p.title} />
                <div className="body">
                  <h3>{p.title} {p.badge && <span className='badge'>{p.badge}</span>}</h3>
                  <p className="small muted">{p.description}</p>
                  {p.link && (
                    <a className="btn" style={{ marginTop: 10 }} href={p.link} target="_blank" rel="noopener noreferrer">前往</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container">
          <h2 className="section-title">聯絡我們</h2>
          <p className="small muted" style={{ marginBottom: 20 }}>留下需求與聯絡方式，我們將盡快回覆。</p>
          <form action="https://formsubmit.co/you@example.com" method="POST" className="form">
            <input type="hidden" name="_subject" value="網站聯絡表單" />
            <input type="text" name="name" placeholder="您的姓名" required />
            <input type="email" name="email" placeholder="電子郵件" required />
            <textarea name="message" rows="4" placeholder="需求內容" required></textarea>
            <button className="btn primary" type="submit">送出</button>
          </form>
          <p className="small muted" style={{ marginTop: 10 }}>提示：把 you@example.com 改成你的 Email 即可收信。</p>
        </div>
      </section>

      <footer className="footer">
        <div className="container small muted">© {new Date().getFullYear()} {data.brand}</div>
      </footer>
    </>
  )
}
