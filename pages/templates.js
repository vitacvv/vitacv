import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const templates = [
  { id: 1, name: "Corporate Europe", img: "/templates/corporate.jpg", pro: false },
  { id: 2, name: "Minimal Nordic", img: "/templates/nordic.jpg", pro: false },
  { id: 3, name: "Modern Creative", img: "/templates/creative.jpg", pro: true },
  { id: 4, name: "Student Compact", img: "/templates/student.jpg", pro: false },
  { id: 5, name: "Tech International", img: "/templates/tech.jpg", pro: true },
  { id: 6, name: "Classic Formal", img: "/templates/classic.jpg", pro: false },
  { id: 7, name: "Bold Executive", img: "/templates/executive.jpg", pro: true },
  { id: 8, name: "Aesthetic", img: "/templates/aesthetic.jpg", pro: true },
];

export default function Templates() {
  const [index, setIndex] = useState(0);

  // Auto-slide once
  useEffect(() => {
    const timer = setTimeout(() => next(), 3000);
    return () => clearTimeout(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % templates.length);
  const prev = () => setIndex((prev) => (prev - 1 + templates.length) % templates.length);

  const template = templates[index];

  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Choose Your Template</h2>
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={template.img}
          alt={template.name}
          style={{
            width: "500px",
            height: "700px",
            borderRadius: "12px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            objectFit: "cover",
          }}
        />
        {template.pro && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              backgroundColor: "#ffd700",
              color: "#333",
              padding: "5px 10px",
              borderRadius: "6px",
              fontWeight: "bold",
              fontSize: "0.9rem",
            }}
          >
            PRO
          </div>
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={prev} style={{ marginRight: "10px" }}>
          <ChevronLeft />
        </button>
        <button onClick={next}>
          <ChevronRight />
        </button>
      </div>

      <p style={{ marginTop: "1rem" }}>
        <strong>{template.name}</strong>
      </p>
    </div>
  );
}
