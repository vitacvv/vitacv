import { useState } from "react";

export default function Builder() {
  const [form, setForm] = useState({
    name: "John Doe",
    title: "Marketing Manager",
    summary:
      "Results-driven marketing professional with 5+ years of experience developing successful campaigns and brand strategies.",
    email: "john@example.com",
    phone: "+1 234 567 890",
    experience: [
      {
        role: "Marketing Specialist",
        company: "CreativeCo",
        years: "2020 – 2023",
      },
    ],
    skills: ["SEO", "Brand Strategy", "Communication", "Leadership"],
  });

  return (
    <main className="min-h-screen bg-[#faf6f1] text-gray-800 font-sans">
      <header className="flex justify-between items-center px-8 py-6 border-b border-[#e5e3df]">
        <h1 className="text-2xl font-semibold text-gray-900">VitaOnline CV Builder</h1>
      </header>

      <div className="grid md:grid-cols-2 gap-10 px-8 py-10">
        {/* Left: Form */}
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-[#a7b69e] mb-2">
              Personal Information
            </h2>
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-[#e5e3df] rounded-lg p-3 mb-3"
            />
            <input
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full border border-[#e5e3df] rounded-lg p-3"
            />
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#a7b69e] mb-2">Summary</h2>
            <textarea
              rows="4"
              value={form.summary}
              onChange={(e) => setForm({ ...form, summary: e.target.value })}
              className="w-full border border-[#e5e3df] rounded-lg p-3"
            />
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#a7b69e] mb-2">Contact</h2>
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-[#e5e3df] rounded-lg p-3 mb-3"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border border-[#e5e3df] rounded-lg p-3"
            />
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#a7b69e] mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {form.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#a7b69e] text-white text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <button
            className="bg-[#a7b69e] text-white px-6 py-3 rounded-lg hover:bg-[#8da387]"
            onClick={() => alert("Your CV has been generated!")}
          >
            Generate CV
          </button>
        </div>

        {/* Right: CV Preview */}
        <div className="bg-white border border-[#e5e3df] rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-[#a7b69e]">{form.name}</h2>
          <p className="text-gray-600 mb-4">{form.title}</p>
          <hr className="border-[#e5e3df] mb-4" />

          <h3 className="text-lg font-semibold mb-1">Summary</h3>
          <p className="text-gray-700 mb-4">{form.summary}</p>

          <h3 className="text-lg font-semibold mb-1">Contact</h3>
          <p className="text-gray-700">
            {form.email} · {form.phone}
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-1">Skills</h3>
          <ul className="list-disc ml-5 text-gray-700">
            {form.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-1">Experience</h3>
          {form.experience.map((exp, idx) => (
            <div key={idx} className="mb-2">
              <p className="font-semibold">{exp.role}</p>
              <p className="text-gray-600 text-sm">
                {exp.company} · {exp.years}
              </p>
            </div>
          ))}
        </div>
      </div>

      <footer className="text-center py-8 border-t border-[#e5e3df] text-gray-500 text-sm">
        © {new Date().getFullYear()} VitaOnline CV — Your career, your design.
      </footer>
    </main>
  );
}

