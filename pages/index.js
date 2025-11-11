// pages/index.js
import { useEffect, useState } from "react";
import Link from "next/link";
import TemplateCard from "../components/TemplateCard";

const ALL_TEMPLATES = [
  { name: "Minimal Nordic", img: "/template_images/minimal.jpg", type: "Free" },
  { name: "Student Compact", img: "/template_images/classic.jpg", type: "Free" },
  { name: "Business Classic", img: "/template_images/classic_line.jpg", type: "Free" },
  { name: "Tech International", img: "/template_images/tech.jpg", type: "Free" },

  { name: "Corporate Europe", img: "/template_images/corporate_pro.jpg", type: "Pro" },
  { name: "Elegant Beige", img: "/template_images/elegant.jpg", type: "Pro" },
  { name: "Aesthetic Sage", img: "/template_images/aesthetic.jpg", type: "Pro" },
  { name: "Modern Creative", img: "/template_images/modern.jpg", type: "Pro" },
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [isProUser, setIsProUser] = useState(false); // simulate real purchase
  const [trialPro, setTrialPro] = useState(false);

  useEffect(() => {
    // load saved values
    const savedTheme = localStorage.getItem("viva_theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
    const pro = localStorage.getItem("vita_isPro");
    if (pro === "1") setIsProUser(true);
    const t = localStorage.getItem("vita_trial");
    if (t === "1") setTrialPro(true);
  }, []);

  function toggleTheme() {
    const now = !isDark;
    setIsDark(now);
    if (now) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("viva_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("viva_theme", "light");
    }
  }

  function startTrial() {
    // trial allows preview, but downloads of Pro will remain watermarked
    setTrialPro(true);
    localStorage.setItem("vita_trial", "1");
    alert("Trial started — you can preview Pro templates. Download still contains watermark until purchase.");
  }

  function purchaseProMock() {
    // MOCK purchase flow — replace with real integration later
    setIsProUser(true);
    setTrialPro(false);
    localStorage.setItem("vita_isPro", "1");
    localStorage.removeItem("vita_trial");
    alert("Thank you — Pro unlocked (mock). Downloads will be watermark-free.");
  }

  function handleUseTemplate(tpl) {
    // go to builder with template selected
    // for now, store selection in localStorage and navigate to /builder
    localStorage.setItem("vita_selected_template", JSON.stringify(tpl));
    window.location.href = "/builder";
  }

  return (
    <div>
      <header className="header">
        <div className="container header-inner">
          <div className="brand">
            <div className="logo">📄</div>
            <div>
              <h1>VITA OnlineCV</h1>
              <p>Your pick for a professional curriculum</p>
            </div>
          </div>

          <nav className="nav">
            <a href="#features">Features</a>
            <Link href="/templates">Templates</Link>
            <a href="/builder">Builder</a>
            <button className="btn btn-outline" onClick={toggleTheme}>
              {isDark ? "Light" : "Dark"}
            </button>
            {isProUser ? (
              <button className="btn btn-primary" onClick={() => alert("Pro features active")}>
                Pro
              </button>
            ) : (
              <div style={{ display: "flex", gap: 8 }}>
                <button className="btn btn-outline" onClick={startTrial}>Try Pro</button>
                <button className="btn btn-primary" onClick={purchaseProMock}>Unlock Pro</button>
              </div>
            )}
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-left">
            <h2 className="title">Build a CV that fits your <span style={{ color: "var(--dark-green)" }}>style and career</span></h2>
            <p className="lead">VITA OnlineCV helps you design a clean, professional, and modern CV that gets attention — in minutes.</p>

            <div style={{ display: "flex", gap: 12 }}>
              <button className="btn btn-primary" onClick={() => (window.location.href = "/builder")}>Start Building</button>
              <Link href="/templates"><button className="btn btn-outline">Explore Templates</button></Link>
            </div>

            <div className="features" style={{ marginTop: 26 }}>
              <div className="feature">
                <div style={{ fontSize: 22, marginBottom: 8 }}>🧩</div>
                <h4 style={{ margin: 0, marginBottom: 6 }}>Clean Design</h4>
                <p style={{ color: "var(--muted)" }}>Minimal templates that highlight your strengths.</p>
              </div>

              <div className="feature">
                <div style={{ fontSize: 22, marginBottom: 8 }}>🤖</div>
                <h4 style={{ margin: 0, marginBottom: 6 }}>AI Smart Builder</h4>
                <p style={{ color: "var(--muted)" }}>Guided suggestions to refine phrasing and structure.</p>
              </div>

              <div className="feature">
                <div style={{ fontSize: 22, marginBottom: 8 }}>📤</div>
                <h4 style={{ margin: 0, marginBottom: 6 }}>Share Easily</h4>
                <p style={{ color: "var(--muted)" }}>Export or share your CV in seconds.</p>
              </div>
            </div>
          </div>

          <div className="hero-right">
            {/* Mockup preview (Pro template example) */}
            <div className="mockup">
              <img src="/template_images/executive.jpg" alt="Mockup" style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }} />
              <div style={{ position: "absolute", top: 12, right: 12 }}>
                <div style={{ background: "var(--pro-badge-bg)", color: "#fff", padding: "6px 10px", borderRadius: 999, fontWeight: 700, fontSize: 12 }}>PRO TEMPLATE</div>
              </div>
              {/* watermark shown on mockup? here the preview includes image with watermark baked in; for other pro templates we show overlay in TemplateCard */}
            </div>
          </div>
        </section>

        {/* small template preview strip (first 4 templates from ALL_TEMPLATES) */}
        <section style={{ marginTop: 28 }}>
          <h3 style={{ marginBottom: 12 }}>Popular templates</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
            {ALL_TEMPLATES.slice(0,4).map((tpl) => (
              <div key={tpl.name} style={{ cursor: "pointer" }} onClick={() => handleUseTemplate(tpl)}>
                <TemplateCard tpl={tpl} isProUser={isProUser || trialPro} onTryPro={() => startTrial()} onUse={handleUseTemplate} />
              </div>
            ))}
          </div>
        </section>

        <section id="features" style={{ marginTop: 46 }}>
          <h3 style={{ marginBottom: 12 }}>Why VITA OnlineCV</h3>
          <p style={{ color: "var(--muted)" }}>Templates tested against real hiring trends: Corporate, Minimal, Creative, and ATS-friendly formats for big companies.</p>
        </section>

        <div className="footer" style={{ marginTop: 48 }}>
          <div className="footer">
            © {new Date().getFullYear()} VITA OnlineCV — Your pick for a professional curriculum.
          </div>
        </div>
      </main>
    </div>
  );
}
