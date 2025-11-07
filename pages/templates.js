import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const templates = [
  { id: 1, name: "Corporate Europe", img: "/template_images/corporate.jpg", pro: false },
  { id: 2, name: "Minimal Nordic", img: "/template_images/nordic.jpg", pro: false },
  { id: 3, name: "Modern Creative", img: "/template_images/creative.jpg", pro: true },
  { id: 4, name: "Student Compact", img: "/template_images/student.jpg", pro: false },
  { id: 5, name: "Tech International", img: "/template_images/tech.jpg", pro: true },
  { id: 6, name: "Classic Formal", img: "/template_images/classic.jpg", pro: false },
  { id: 7, name: "Bold Executive", img: "/template_images/executive.jpg", pro: true },
  { id: 8, name: "Aesthetic", img: "/template_images/aesthetic.jpg", pro: true },
];

export default function Templates() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => next(), 3000);
    return () => clearTimeout(timer);
  }, []);

  const next = () => setIndex((i) => (i + 1) % templates.length);
  const prev = () => setIndex((i) => (i - 1 + templates.length) % templates.length);
  const template = templates[index];

  return (
    <div style={{ textAlign: "center", paddingTop: "100px", background: "#f6f1eb", minHeight: "100vh" }}>
      <h2 style={{ fontSize: "2rem", color: "#2e2e2e", marginBottom: "1rem" }}>Choose Your Template</h2>
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={template.img}
          alt={template.name}
          style={{
            width: "480px",
            height: "680px",
            borderRadius: "16px",
            border: "4px solid #a3b18a",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            objectFit: "cover",
          }}
        />
        {template.pro && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "#ffd700",
              padding: "4px 10px",
              borderRadius: "8px",
              fontWeight: "bold",
              color: "#333",
              fontSize: "0.8rem",
            }}
          >
            PRO
          </div>
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={prev}
          style={{
            marginRight: "10px",
            backgroundColor: "#a3b18a",
            border: "none",
            color: "white",
            padding: "10px 16px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          style={{
            backgroundColor: "#a3b18a",
            border: "none",
            color: "white",
            padding: "10px 16px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          <ChevronRight />
        </button>
      </div>

      <p style={{ marginTop: "1rem", color: "#2e2e2e" }}>
        <strong>{template.name}</strong>
      </p>
    </div>
  );
}
