import Image from "next/image";
import Link from "next/link";

export default function Templates() {
  const templates = [
    {
      name: "Modern Sage",
      img: "/template_images/modern_sage.jpg",
      type: "Free",
    },
    {
      name: "Corporate Pro",
      img: "/template_images/corporate_pro.jpg",
      type: "Pro",
    },
    {
      name: "Elegant Beige",
      img: "/template_images/elegant_beige.jpg",
      type: "Free",
    },
    {
      name: "Minimal Resume",
      img: "/template_images/minimal_resume.jpg",
      type: "Pro",
    },
    {
      name: "Creative Flow",
      img: "/template_images/creative_flow.jpg",
      type: "Free",
    },
    {
      name: "Classic Line",
      img: "/template_images/classic_line.jpg",
      type: "Free",
    },
    {
      name: "Modernist CV",
      img: "/template_images/modernist_cv.jpg",
      type: "Pro",
    },
    {
      name: "Executive",
      img: "/template_images/executive.jpg",
      type: "Pro",
    },
  ];

  return (
    <main className="min-h-screen bg-[#faf6f1] text-gray-800 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-[#e5e3df]">
        <h1 className="text-2xl font-semibold text-gray-900">VitaOnline CV</h1>
        <div className="space-x-3">
          <Link
            href="/builder"
            className="bg-[#a7b69e] text-white px-5 py-2 rounded-lg hover:bg-[#8da387] transition-all"
          >
            Build Your CV
          </Link>
          <Link
            href="/"
            className="border border-[#a7b69e] text-[#a7b69e] px-5 py-2 rounded-lg hover:bg-[#f4f2ef]"
          >
            Home
          </Link>
        </div>
      </header>

      {/* Intro */}
      <section className="text-center mt-10 mb-8 px-4">
        <h2 className="text-3xl font-bold text-[#a7b69e] mb-2">
          Explore Professional Templates
        </h2>
        <p className="text-gray-600">
          Pick the design that matches your style and career — Pro versions unlock more customization.
        </p>
      </section>

      {/* Template Grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 pb-20">
        {templates.map((template) => (
          <div
            key={template.name}
            className="relative bg-white border border-[#e5e3df] rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all"
          >
            {/* Pro Badge */}
            {template.type === "Pro" && (
              <span className="absolute top-3 right-3 bg-[#a7b69e] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                PRO
              </span>
            )}

            {/* Image */}
            <div className="h-64 relative">
              <Image
                src={template.img}
                alt={template.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Template Info */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[#4a4a4a]">
                {template.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {template.type === "Pro" ? "Premium Design" : "Free Template"}
              </p>
              <Link
                href="/builder"
                className="inline-block bg-[#a7b69e] text-white px-4 py-2 rounded-lg hover:bg-[#8da387] text-sm"
              >
                Use This Template
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-[#e5e3df] text-gray-500 text-sm">
        © {new Date().getFullYear()} VitaOnline CV — Build your professional profile.
      </footer>
    </main>
  );
}

