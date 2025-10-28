export default function Builder() {
  return (
    <div style={{
      fontFamily: "Inter, Arial, sans-serif",
      backgroundColor: "#ffffff",
      minHeight: "100vh",
      padding: "40px 20px",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "700", color: "#111827" }}>
        CV Builder
      </h1>
      <p style={{ color: "#4b5563", marginTop: "10px" }}>
        Start filling in your details below 👇
      </p>

      <form style={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px"
      }}>
        <input type="text" placeholder="Full Name" style={inputStyle} />
        <input type="text" placeholder="Job Title" style={inputStyle} />
        <input type="email" placeholder="Email" style={inputStyle} />
        <textarea placeholder="About You" style={{...inputStyle, height: "120px"}} />
        <button style={{
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "8px",
          fontWeight: "600",
          cursor: "pointer"
        }}>Generate CV</button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "90%",
  maxWidth: "400px",
  padding: "12px 16px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  fontSize: "1rem"
};
