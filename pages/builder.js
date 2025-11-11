// pages/builder.js
import { useEffect, useState } from "react";

export default function Builder() {
  const [tpl, setTpl] = useState(null);
  const [isProUser, setIsProUser] = useState(false);

  useEffect(() => {
    const sel = localStorage.getItem("vita_selected_template");
    if (sel) setTpl(JSON.parse(sel));
    if (localStorage.getItem("vita_isPro") === "1") setIsProUser(true);
  }, []);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", paddingBottom: 80 }}>
      <div className="container" style={{ paddingTop: 18 }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1>VITA OnlineCV — Builder</h1>
          <div style={{ color: "var(--muted)" }}>{tpl ? tpl.name : "Choose a template"}</div>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 18, marginTop: 16 }}>
          <div style={{ background: "var(--card)", padding: 16, borderRadius: 12, border: "1px solid var(--card-border)" }}>
            <h3>Editor (placeholder)</h3>
            <p style={{ color: "var(--muted)" }}>This is the editor area — add form fields here. Current template: {tpl ? tpl.name : "none selected"}</p>

            <div style={{ marginTop: 12 }}>
              <button className="btn btn-primary" onClick={() => alert("Generate PDF (mock) — Pro users get watermark-free files.")}>Generate PDF</button>
              <button style={{ marginLeft: 10 }} className="btn btn-outline" onClick={() => alert("Download preview (mock)")}>Download preview</button>
            </div>
          </div>

          <aside style={{ background: "var(--card)", padding: 16, borderRadius: 12, border: "1px solid var(--card-border)" }}>
            <h4>Live preview</h4>
            <div style={{ marginTop: 12 }}>
              {tpl ? (
                <img src={tpl.img} alt="preview" style={{ width: "100%", borderRadius: 8 }} />
              ) : (
                <div style={{ padding: 32, color: "var(--muted)" }}>Select a template from /templates</div>
              )}
            </div>

            <div style={{ marginTop: 12 }}>
              <p style={{ color: "var(--muted)", fontSize: 13 }}>
                Note: If you are not Pro and use a Pro template, downloads will include a watermark. Unlock Pro to remove watermark.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
