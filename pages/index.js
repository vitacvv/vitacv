// pages/index.js
import { useEffect, useRef, useState } from "react";
import Head from "next/head";

const TEMPLATES = [
  { key: "corporate", title: "Corporate Europe", desc: "ATS-friendly, two-column corporate layout." },
  { key: "nordic", title: "Minimal Nordic", desc: "Clean Scandinavian minimalism." },
  { key: "creative", title: "Modern Creative", desc: "Flexible layout for portfolios." },
  { key: "student", title: "Student Compact", desc: "One-page, skills-first for early careers." },
  { key: "tech", title: "Tech International", desc: "Project & stack focused for devs." },
  { key: "executive", title: "Executive Classic", desc: "Elegant design for leadership roles." },
  { key: "freelance", title: "Global Freelancer", desc: "Modular layout with portfolio links." },
  { key: "aesthetic", title: "Aesthetic Balance", desc: "Subtle earthy design with personality." }
];

export default function Home() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false); // will start after first click
  const [autoRunning, setAutoRunning] = useState(false);
  const autoRef = useRef(null);

  useEffect(() => {
    // cleanup on unmount
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, []);

  useEffect(() => {
    if (autoplay && !autoRunning) {
      // start auto-advance
      autoRef.current = setInterval(() => {
        step(1);
      }, 5000);
      setAutoRunning(true);
    }
    if (!autoplay && autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
      setAutoRunning(false);
    }
  }, [autoplay]);

  function step(dir) {
    const next = (index + dir + TEMPLATES.length) % TEMPLATES.length;
    setIndex(next);
    // scroll track to show card at position next
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[next];
    if (card) {
      const left = card.offsetLeft - track.offsetLeft - 12; // small padding adjust
      track.scrollTo({ left, behavior: "smooth" });
    }
  }

  function handleArrow(dir) {
    // on first arrow click, start autoplay
    if (!autoplay) setAutoplay(true);
    step(dir);
  }

  function goTo(i) {
    setIndex(i);
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i];
    if (card) {
      const left = card.offsetLeft - track.offsetLeft - 12;
      track.scrollTo({ left, behavior: "smooth" });
    }
  }

  return (
    <>
      <Head>
        <title>VitaCV — Your pick for a professional curriculum</title>
        <meta name="description" content="Build a CV that fits your style and career in a few seconds." />
      </Head>

      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <div className="mark">V</div>
            <div>
              <h1>VitaCV</h1>
              <p style={{fontSize:".78rem", marginTop:4}}>Your pick for a professional curriculum</p>
            </div>
          </div>

          <nav className="header-nav">
            <a href="#features">Features</a>
            <a href="#templates">Templates</a>
            <a href="/builder">Builder</a>
            <button className="theme-toggle" onClick={()=>{
              // simple local theme switch (light/dark)
              const root = document.documentElement;
              const dark = root.style.getPropertyValue('--dark-mode') === '1';
              if(!dark) {
                root.style.setProperty('--bg-beige', '#111214');
                root.style.setProperty('--paper', '#141414');
                root.style.setProperty('--text', '#f3efe9');
                root.style.setProperty('--muted', '#cfcfcf');
                root.style.setProperty('--card-border', '#222');
                root.style.setProperty('--dark-mode','1');
              } else {
                root.style.setProperty('--bg-beige', '#f5f2eb');
                root.style.setProperty('--paper', '#fffdfb');
                root.style.setProperty('--text', '#2b2b2b');
                root.style.setProperty('--muted', '#6b6b6b');
                root.style.setProperty('--card-border', '#e6e2da');
                root.style.setProperty('--dark-mode','0');
              }
            }}>Toggle</button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-left">
            <h2 className="h1">Build a CV that fits your style and career in a few seconds.</h2>
            <p className="lead">VitaCV lets you pick a market-tested template, fill your details, and export a professional résumé — fast.</p>
            <div className="cta-row">
              <a href="/builder" className="btn btn-primary">Start Creating</a>
              <a href="#templates" className="btn btn-outline">Explore Templates</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="carousel-wrap" id="templates">
              <div className="carousel-container">
                <button className="arrow left" aria-label="previous" onClick={()=>handleArrow(-1)}>‹</button>
                <div className="carousel-track" ref={trackRef}>
                  {TEMPLATES.map((t, i) => (
                    <div className="card" key={t.key} aria-hidden={index !== i}>
                      <div className="thumb" aria-hidden>
                        {/* sample templated thumbnail — styled inline SVG / HTML so no external files required */}
                        <div style={{width:"92%",height:"88%", borderRadius:8, padding:12, background: "linear-gradient(180deg, #fff, #fbf9f6)", border:"1px solid #efeae2", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <div style={{width:56,height:56,borderRadius:8, background:"#f0efe9", display:"flex", alignItems:"center", justifyContent:"center", color:"var(--sage)", fontWeight:700}}>CV</div>
                            <div style={{fontSize:12, color:"var(--muted)"}}>Template</div>
                          </div>

                          {/* mockup content lines */}
                          <div style={{marginTop:6, display:"flex", flexDirection:"column", gap:8}}>
                            <div style={{height:12, width:"70%", background:"#efe9df", borderRadius:6}} />
                            <div style={{height:10, width:"90%", background:"#fbf1e8", borderRadius:6}} />
                            <div style={{display:"flex", gap:8, marginTop:8}}>
                              <div style={{height:8, width:"30%", background:"#efeae2", borderRadius:6}} />
                              <div style={{height:8, width:"30%", background:"#efeae2", borderRadius:6}} />
                              <div style={{height:8, width:"20%", background:"#efeae2", borderRadius:6}} />
                            </div>
                          </div>

                          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <div style={{height:8, width:"40%", background:"#efeae2", borderRadius:6}} />
                            <div style={{height:8, width:"20%", background:"rgba(216,123,55,0.15)", borderRadius:6}} />
                          </div>
                        </div>
                      </div>

                      <h3>{t.title}</h3>
                      <p>{t.desc}</p>
                    </div>
                  ))}
                </div>

                <button className="arrow right" aria-label="next" onClick={()=>handleArrow(1)}>›</button>

                <div className="indicators" style={{marginTop:12, display:"flex", justifyContent:"center"}}>
                  {TEMPLATES.map((_,i)=>(
                    <div key={i} className={`dot ${i===index? 'active':''}`} onClick={()=>goTo(i)} style={{cursor:"pointer"}}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="how" aria-hidden>
          <div className="how-card">
            <h4>1 — Choose a template</h4>
            <p>Pick a market-tested layout suited to your job market.</p>
          </div>
          <div className="how-card">
            <h4>2 — Fill your details</h4>
            <p>Use smart suggestions and grammar tools to improve wording.</p>
          </div>
          <div className="how-card">
            <h4>3 — Export & apply</h4>
            <p>Download PDF or share a link with employers.</p>
          </div>
        </section>

        <footer className="footer">
          <div style={{maxWidth:1100, margin:"0 auto"}}>© {new Date().getFullYear()} VitaCV • Built with care</div>
        </footer>
      </main>
    </>
  );
}

