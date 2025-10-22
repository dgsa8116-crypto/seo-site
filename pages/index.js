import fs from 'fs';
import path from 'path';
import SEO from '@/components/SEO';

export async function getStaticProps(){
  const root = process.cwd();
  const data = JSON.parse(fs.readFileSync(path.join(root,'data','content.json'),'utf8'));
  const meta = JSON.parse(fs.readFileSync(path.join(root,'data','seo.json'),'utf8'));
  if(meta.image && !meta.image.startsWith('http')) meta.image = (meta.url || '') + meta.image;
  return { props:{ data, meta } };
}

export default function Home({ data, meta }){
  return (
    <>
      <SEO meta={meta}/>
      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand"><span className="dot"></span>{data.brand}</div>
          <div className="muted">關於我們 ・ 服務 ・ 作品 ・ 聯絡</div>
        </div>
      </nav>

      <header className="container hero">
        <div>
          <h1>{data.hero.title}</h1>
          <p className="muted">{data.hero.subtitle}</p>
          {data.hero?.cta && <a className="btn" href={data.hero.cta.href} target="_blank" rel="noopener noreferrer">{data.hero.cta.label}</a>}
        </div>
        <img className="hero-img" src={data.hero.image} alt={data.hero.title}/>
      </header>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{data.services.title}</h2>
          <div className="grid-3">
            {data.services.items.map((s,i)=>(
              <div className="card" key={i}>
                <img src={s.image} alt={s.title}/>
                <div className="body">
                  <h3>{s.title}{s.badge && <span className='badge'>{s.badge}</span>}</h3>
                  <p className="muted">{s.description}</p>
                  {s.link && <a className="btn" href={s.link} target="_blank" rel="noopener noreferrer">前往</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{data.portfolio.title}</h2>
          <div className="grid-3">
            {data.portfolio.items.map((p,i)=>(
              <div className="card" key={i}>
                <img src={p.image} alt={p.title}/>
                <div className="body">
                  <h3>{p.title}{p.badge && <span className='badge'>{p.badge}</span>}</h3>
                  <p className="muted">{p.description}</p>
                  {p.link && <a className="btn" href={p.link} target="_blank" rel="noopener noreferrer">前往</a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer muted">© {new Date().getFullYear()} {data.brand}</footer>
    </>
  )
}
