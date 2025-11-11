// pages/templates.js
import { useEffect, useState } from "react";
import TemplateCard from "../components/TemplateCard";

const TEMPLATES = [
  { name: "Minimal Nordic", img: "/template_images/minimal.jpg", type: "Free" },
  { name: "Student Compact", img: "/template_images/classic.jpg", type: "Free" },
  { name: "Business Classic", img: "/template_images/classic_line.jpg", type: "Free" },
  { name: "Tech International", img: "/template_images/tech.jpg", type: "Free" },

  { name: "Corporate Europe", img: "/template_images/corporate_pro.jpg", type: "Pro" },
  { name: "Elegant Beige", img: "/template_images/elegant.jpg", type: "Pro" },
  { name: "Aesthetic Sage", img: "/template_images/aesthetic.jpg", type: "Pro" },
  { name: "Modern Creative", img: "/template_images/modern.jpg", type: "Pro" },
];

export default function TemplatesPage() {
  const [isProUser, setIsProUser] = useState(false);
  const [trialPro, setTrialPro] = useState(false);
  const [showUnlock, setShowUnlock] = useState(false);

  useEffect(() => {
    const pro = localStorage.getItem("vita_isPro");
    if (pro === "1") setIsProUser(true);
    const t = localStorage.getItem("vita_trial");
    if (t === "1") setTrialPro(true);
  }, []);

  function tryPro() {
    localStorage.setItem("vita_trial", "1");
    setTrialPro(true);
    alert("Trial enabled — you can preview Pro templates.");
  }
  function purchaseMock() {
    localStorage.setItem("vita_isPro", "1");
    setIsProUser(true);
    localStorage.removeItem("vita_trial");
    setTrialPro(false);
    alert("Thank you — Pro unlocked (mock).");
  }

  function useTemplate(tpl) {
    // if template is pro and user not pro -> show unlock prompt on download/Use
    if (tpl.type === "Pro" && !isProUser) {
      // allow preview, but downloads will be watermarked
      const ok = confirm("This is a Pro template. Preview is available. Download will include a watermark. Try or unlock Pro?");
      if (ok) {
        // store selection and go to builder
        localStorage.setItem("vita_selected_template", JSON.stringify(tpl));
        window.location.href = "/builder";
      }
    } else {
      localStorage.setItem("vita_selected_template", JSON.stringify(tpl));
      window.location.href = "/builder";
    }
  }

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <div className="container" style={{ paddingTop: 18 }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0" }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: "var(--card)", display: "flex", alignItems: "center", justifyContent: "center" }}>📄</div>
            <div>
              <h1 style={{ margin: 0 }}>VITA OnlineCV</h1>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>Your pick for a professional curriculum</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn btn-outline" onClick={() => tryPro()}>Try Pro</button>
            <button className="btn btn-primary" onClick={() => purchaseMock()}>Unlock Pro</button>
          </div>
        </header>

        <main style={{ marginTop: 18 }}>
          <h2 style={{ marginBottom: 6 }}>Explore Templates</h2>
          <p style={{ color: "var(--muted)" }}>Click a template to use it in the builder. Pro templates show watermark for non-Pro users.</p>

          <div className="templates-grid" style={{ marginTop: 18 }}>
            {TEMPLATES.map((tpl) => (
              <TemplateCard key={tpl.name} tpl={tpl} isProUser={isProUser || trialPro} onTryPro={() => tryPro()} onUse={useTemplate} />
            ))}
          </div>
        </main>

        <div style={{ height: 80 }} />
      </div>
    </div>
  );
}
