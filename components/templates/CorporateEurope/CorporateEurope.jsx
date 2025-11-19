import React from "react";

export default function CorporateEurope({ data }) {
  const {
    name = "Alexandre Dupont",
    title = "Business Analyst",
    email = "alex.dupont@example.com",
    phone = "+33 6 45 78 90 12",
    location = "Paris, France",
    summary = "Analytical and detail-oriented business analyst with experience across European markets.",
    skills = ["Market Research", "Excel", "KPI Tracking", "SAP", "Data Reporting"],
    experience = [
      {
        role: "Business Analyst",
        company: "EuroTech Solutions",
        years: "2021 - Present",
        desc: "Delivered KPI dashboards and optimized reporting efficiency across EU teams."
      },
    ],
    education = [
      {
        degree: "B.Sc. in Economics",
        school: "Université Paris-Dauphine",
        years: "2017 - 2020"
      },
    ],
  } = data || {};

  return (
    <div
      style={{
        width: "210mm",
        minHeight: "297mm",
        padding: "25mm",
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
        border: "1px solid #e5e5e5",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left text */}
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "4px" }}>
            {name}
          </h1>
          <p style={{ fontSize: "16px", color: "#555" }}>{title}</p>

          <p style={{ marginTop: "8px", fontSize: "14px", color: "#444" }}>{email}</p>
          <p style={{ fontSize: "14px", color: "#444" }}>{phone}</p>
          <p style={{ fontSize: "14px", color: "#444" }}>{location}</p>
        </div>

        {/* Photo placeholder */}
        <div
          style={{
            width: "110px",
            height: "140px",
            border: "2px solid #d3d3d3",
            borderRadius: "6px",
            backgroundColor: "#f8f8f8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
            color: "#777",
          }}
        >
          PHOTO
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 style={{ fontSize: "18px", borderBottom: "1px solid #ccc", marginBottom: "6px" }}>
          Profile Summary
        </h2>
        <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
          {summary}
        </p>
      </div>

      {/* Skills */}
      <div>
        <h2 style={{ fontSize: "18px", borderBottom: "1px solid #ccc", marginBottom: "6px" }}>
          Skills
        </h2>
        <ul style={{ fontSize: "14px", lineHeight: "1.5" }}>
          {skills.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>

      {/* Experience */}
      <div>
        <h2 style={{ fontSize: "18px", borderBottom: "1px solid #ccc", marginBottom: "6px" }}>
          Experience
        </h2>

        {experience.map((job, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <p style={{ fontWeight: "bold" }}>{job.role} — {job.company}</p>
            <p style={{ fontSize: "13px", color: "#666" }}>{job.years}</p>
            <p style={{ fontSize: "14px" }}>{job.desc}</p>
          </div>
        ))}
      </div>

      {/* Education */}
      <div>
        <h2 style={{ fontSize: "18px", borderBottom: "1px solid #ccc", marginBottom: "6px" }}>
          Education
        </h2>

        {education.map((ed, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <p style={{ fontWeight: "bold" }}>{ed.degree}</p>
            <p style={{ fontSize: "14px" }}>{ed.school}</p>
            <p style={{ fontSize: "13px", color: "#666" }}>{ed.years}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
