export default function Home() {
  return (
    <>
      <nav>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "24px" }}>💼</span>
          <h2>VitaCV</h2>
        </div>
        <div>
          <a href="#features">Features</a>
          <a href="#build">Build CV</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Build your CV with confidence</h1>
        <p>VitaCV helps you design a clean, professional, and modern CV that gets attention — in minutes.</p>
        <button>Start Building</button>
      </section>

      <section id="features" className="features">
        <div className="feature-card">
          <h3>🧩 Clean Design</h3>
          <p>Minimal, professional templates that highlight your strengths.</p>
        </div>
        <div className="feature-card">
          <h3>💡 Smart Suggestions</h3>
          <p>Get AI-powered tips for better structure and wording.</p>
        </div>
        <div className="feature-card">
          <h3>📤 Share Easily</h3>
          <p>Export your CV or share it online instantly.</p>
        </div>
      </section>

      <footer>
        © 2025 VitaCV. All rights reserved.
      </footer>
    </>
  );
}


