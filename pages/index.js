import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <h1 style={{ fontWeight: 700 }}>VitaOnline CV</h1>
        <Link href="/builder">
          <button>Build Your CV</button>
        </Link>
      </header>

      <main style={{ paddingTop: "120px", textAlign: "center" }}>
        <section>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Build a CV that fits your style and career in seconds
          </h2>
          <p style={{ color: "#555", marginBottom: "3rem" }}>
            Create a polished, professional CV using expertly designed templates.
          </p>

          {/* Mockup CV preview */}
          <div
            style={{
              margin: "auto",
              width: "600px",
              height: "850px",
              backgroundColor: "white",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              padding: "40px",
              textAlign: "left",
            }}
          >
            <h2 style={{ color: "var(--sage)" }}>Jane Doe</h2>
            <p style={{ marginTop: "-10px" }}>Marketing Specialist</p>
            <hr style={{ borderColor: "var(--sage)", margin: "20px 0" }} />
            <h3>Experience</h3>
            <p>
              <strong>ABC Company</strong> — Marketing Manager (2020–Present)
            </p>
            <p>Developed campaigns increasing engagement by 40%.</p>
            <h3>Education</h3>
            <p>
              B.A. in Business Communication, <em>University of London</em>
            </p>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <Link href="/templates">
              <button>Explore Templates</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
