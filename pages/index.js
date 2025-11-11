import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const templates = [
    { name: "Corporate Europe", img: "/template_images/corporate.jpg", pro: false },
    { name: "Minimal Nordic", img: "/template_images/minimal.jpg", pro: false },
    { name: "Modern Creative", img: "/template_images/modern.jpg", pro: true },
    { name: "Student Compact", img: "/template_images/student.jpg", pro: false },
    { name: "Tech International", img: "/template_images/tech.jpg", pro: true },
    { name: "Classic Professional", img: "/template_images/nordic.jpg", pro: false },
    { name: "Elegant Global", img: "/template_images/international.jpg", pro: true },
    { name: "Aesthetic", img: "/template_images/aesthetic.jpg", pro: true },
  ];

  const features = [
    {
      title: "AI-Powered Builder",
      text: "Generate your CV instantly using smart AI suggestions.",
      icon: "/icons/ai.svg",
    },
    {
      title: "Professional Design",
      text: "Choose from curated templates built by designers.",
      icon: "/icons/design.svg",
    },
    {
      title: "Share Anywhere",
      text: "Download or share your CV instantly with one click.",
      icon: "/icons/share.svg",
    },
  ];

  return (
    <main className="bg-[#F8F4EF] min-h-screen text-[#2E2E2E]">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6 bg-white shadow-sm sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-[#2E2E2E]">VitaOnline CV</h1>
        <Link
          href="/builder"
          className="bg-[#9CAF88] text-white px-6 py-2 rounded-lg hover:bg-[#8DA87E] transition"
        >
          Build Your CV
        </Link>
      </header>

      {/* Hero */}
      <section className="text-center py-14 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          Build a CV that fits your style and career in seconds
        </h2>
        <p className="text-gray-600 mb-8">
          Create a polished, professional CV using expertly designed templates.
        </p>
        <div className="space-x-4">
          <Link
            href="/builder"
            className="bg-[#9CAF88] text-white px-6 py-3 rounded-lg hover:bg-[#8DA87E] transition"
          >
            Start Building
          </Link>
          <Link
            href="/templates"
            className="text-[#9CAF88] font-medium hover:underline"
          >
            Explore Templates
          </Link>
        </div>
      </section>

      {/* AI Features */}
      <section className="bg-white py-12 px-8 md:px-16">
        <div className="grid md:grid-cols-3 gap-10 text-center max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-[#F8F4EF] rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4 shadow-md">
                <Image src={f.icon} alt={f.title} width={30} height={30} />
              </div>
              <h4 className="font-semibold text-lg mb-2 text-[#4A4A4A]">{f.title}</h4>
              <p className="text-gray-600 text-sm max-w-xs">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CV Mockup */}
      <section className="flex justify-center py-12">
        <div className="bg-white rounded-2xl shadow-xl w-[360px] p-8 border border-[#DCDAD4] hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-xl font-semibold text-[#8DA87E]">Sofia Yamamoto</h3>
          <p className="text-gray-700 mb-4">UX Designer | Tokyo, Japan</p>
          <p className="text-gray-500 mb-2">
            Passionate designer blending minimalism and functionality.
          </p>
          <p className="text-gray-500 mb-6">
            Skilled in Figma, UX Research, and Brand Identity.
          </p>
          <h4 className="font-semibold text-[#4A4A4A] mb-2">Experience</h4>
          <p className="text-gray-600 text-sm mb-1">
            <strong>DesignWorks</strong> — Lead UX Designer (2020–Present)
          </p>
          <p className="text-gray-600 text-sm">Improved conversion by 32% through redesign.</p>
        </div>
      </section>

      {/* Templates */}
      <section className="px-10 py-12">
        <h3 className="text-2xl font-semibold mb-8 text-center">
          Explore Template Styles
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {templates.map((tpl, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer"
            >
              <div className="overflow-hidden">
                <Image
                  src={tpl.img}
                  alt={tpl.name}
                  width={400}
                  height={520}
                  className="object-cover w-full h-64 transform group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>
              {tpl.pro && (
                <span className="absolute top-3 right-3 bg-[#9CAF88] text-white text-xs px-3 py-1 rounded-full shadow-md">
                  PRO
                </span>
              )}
              <div className="absolute bottom-0 w-full bg-[#00000088] text-white text-center py-2 text-sm font-medium group-hover:bg-[#000000AA] transition">
                {tpl.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 VitaOnline CV — Crafted for efficiency and style.
      </footer>
    </main>
  );
}
