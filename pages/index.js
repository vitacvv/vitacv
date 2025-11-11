import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf6f1] text-gray-800 font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-semibold text-gray-900">VitaOnline CV</h1>
        <Link
          href="/builder"
          className="bg-[#a7b69e] text-white px-5 py-2 rounded-lg hover:bg-[#8da387] transition-all"
        >
          Build Your CV
        </Link>
      </header>

      {/* Hero Section */}
      <section className="text-center mt-10 px-6">
        <h2 className="text-4xl font-bold mb-3">
          Build a CV that fits your style and career in seconds
        </h2>
        <p className="text-gray-600 mb-8">
          Create a polished, professional CV using expertly designed templates.
        </p>

        <div className="flex justify-center space-x-4 mb-10">
          <Link
            href="/builder"
            className="bg-[#a7b69e] text-white px-6 py-3 rounded-lg hover:bg-[#8da387]"
          >
            Start Building
          </Link>
          <Link
            href="/templates"
            className="border border-[#a7b69e] text-[#a7b69e] px-6 py-3 rounded-lg hover:bg-[#f4f2ef]"
          >
            Explore Templates
          </Link>
        </div>

        {/* Example Mockup CV */}
        <div className="flex justify-center">
          <div className="bg-white shadow-lg p-8 rounded-2xl w-[360px] text-left border border-[#e5e3df]">
            <h3 className="text-2xl font-semibold text-[#a7b69e]">
              Sofia Yamamoto
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              UX Designer | Tokyo, Japan
            </p>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              Passionate designer blending minimalism and functionality. Skilled
              in Figma, UX Research, and Brand Identity.
            </p>

            <div className="border-t border-gray-200 pt-3 mt-3">
              <p className="font-semibold text-gray-800">Experience</p>
              <p className="text-sm">Design Lead – Miko Studio (2021–Present)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6 mt-20 px-10 pb-20">
        {[
          {
            title: "Beautiful Templates",
            desc: "Choose from elegant, modern layouts tailored to your profession.",
            icon: "/icons/design.svg",
          },
          {
            title: "AI-Guided Builder",
            desc: "Smart suggestions to highlight your best achievements.",
            icon: "/icons/ai.svg",
          },
          {
            title: "Instant Sharing",
            desc: "Download or share your CV online with a single click.",
            icon: "/icons/share.svg",
          },
        ].map((f) => (
          <div
            key={f.title}
            className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5e3df] text-center"
          >
            <Image
              src={f.icon}
              alt={f.title}
              width={48}
              height={48}
              className="mx-auto mb-3"
            />
            <h3 className="text-lg font-semibold text-[#a7b69e] mb-2">
              {f.title}
            </h3>
            <p className="text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-[#e5e3df] text-gray-500 text-sm">
        © {new Date().getFullYear()} VitaOnline CV — Crafted for efficiency and style.
      </footer>
    </main>
  );
}
