export default function Home() {
  return (
    <div style={{
      fontFamily: "Inter, Arial, sans-serif",
      backgroundColor: "#f9fafb",
      minHeight: "100vh",
      padding: "50px 20px",
      textAlign: "center"
    }}>
      <h1 style={{
        fontSize: "3rem",
        fontWeight: "700",
        color: "#111827"
      }}>
        VitaCV
      </h1>

      <p style={{
        fontSize: "1.2rem",
        color: "#4b5563",
        marginTop: "10px"
      }}>
        Create your professional CV in minutes. Simple. Fast. Beautiful.
      </p>

      <div style={{
        marginTop: "40px",
        display: "flex",
        justifyContent: "center",
        gap: "15px"
      }}>
        <a
          href="/builder"
          style={{
            padding: "12px 24px",
            backgroundColor: "#2563eb",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600"
          }}
        >
          Get Started
        </a>
        <a
          href="https://github.com/vitacvv/vitacv"
          target="_blank"
          style={{
            padding: "12px 24px",
            backgroundColor: "#e5e7eb",
            color: "#111827",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600"
          }}
        >
          View on GitHub
        </a>
      </div>

      <img
        src="https://cdn.dribbble.com/userupload/4323552/file/original-7dbe3ed1e7d1e93dd1c40c2a9249a7f0.png?resize=1200x900"
        alt="CV preview"
        style={{
          maxWidth: "600px",
          width: "90%",
          margin: "60px auto 0",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
        }}
      />
    </div>
  );
}

