// pages/templates.js
import Head from "next/head";

export default function Templates() {
  const templates = [
    {
      name: "Corporate Europe",
      type: "Pro",
      img: "/template_images/corporate.jpg",
      accent: "#174c3c",
    },
    {
      name: "Minimal Nordic",
      type: "Pro",
      img: "/template_images/nordic.jpg",
      accent: "#8b7355",
    },
    {
      name: "Modern Creative",
      type: "Free",
      img: "/template_images/modern.jpg",
      accent: "#00473e",
    },
    {
      name: "Classic Elegance",
      type: "Free",
      img: "/template_images/classic.jpg",
      accent: "#675d50",
    },
    {
      name: "Tech Professional",
      type: "Pro",
      img: "/template_images/tech.jpg",
      accent: "#0d5c63",
    },
    {
      name: "Compact Focus",
      type: "Free",
      img: "/template_images/compact.jpg",
      accent: "#51625d",
    },
    {
      name: "Bold Header",
      type: "Pro",
      img: "/template_images/bold.jpg",
      accent: "#c8702e",
    },
    {
      name: "Soft Modern",
      type: "Free",
      img: "/template_images/soft.jpg",
      accent: "#7a8b77",
    },
  ];

  return (
    <>
      <Head>
        <title>Explore Templates | VitaOnline CV</title>
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">VitaOnline CV</h1>
          <nav className="space-x-6 text-gray-700 font-medium">
            <a href="/" className="hover:text-green-700">Home</a>
            <a href="#pro" className="hover:text-green-700">Pro Templates</a>
            <a
              href="/builder"
              className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
            >
              Build Your CV
            </a>
          </nav>
        </div>
      </header>

      <main className="bg-[#f8f5f0] pt-28 pb-16 min-h-screen">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Choose Your Template
          </h2>
          <p className="text-gray-600">
            Browse our professionally designed templates — pick one and start editing instantly.
          </p>
        </section>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
          {templates.map((tpl, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
            >
              <img
                src={tpl.img}
                alt={tpl.name}
                className="w-full h-56 object-cover transform group-hover:scale-105 transition"
              />
              {tpl.type === "Pro" && (
                <span className="absolute top-3 right-3 bg-green-700 text-white text-xs px-3 py-1 rounded-full">
                  Pro
                </span>
              )}

              <div className="p-5">
                <h3
                  className="font-semibold text-lg mb-1"
                  style={{ color: tpl.accent }}
                >
                  {tpl.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {tpl.type === "Pro"
                    ? "Premium design for professionals."
                    : "Free and easy to customize."}
                </p>
                <a
                  href="/builder"
                  className="inline-block bg-green-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-800 transition"
                >
                  Use Template
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t py-6 text-center text-gray-500 mt-10">
        © {new Date().getFullYear()} VitaOnline CV. All rights reserved.
      </footer>
    </>
  );
}
