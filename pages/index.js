import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>VitaOnline CV | Build Your Professional CV</title>
        <meta name="description" content="Build a CV that fits your style and career in seconds." />
      </Head>

      {/* Hero Section */}
      <section className="min-h-screen bg-[#FAF8F4] text-[#3C3C3B] flex flex-col items-center justify-center px-6 py-20">
        <h1 className="text-5xl font-semibold mb-4 tracking-tight text-[#3C3C3B]">
          VitaOnline <span className="text-[#C86E3B]">CV</span>
        </h1>
        <p className="text-lg text-[#6F6F6E] max-w-2xl text-center mb-10">
          Build a CV that fits your <span className="text-[#C86E3B]">style</span> and career in just a few seconds.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mb-16">
          <a href="/builder" className="bg-[#C86E3B] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#b15e32] transition">
            Start Building
          </a>
          <a href="/templates" className="border border-[#C86E3B] text-[#C86E3B] px-6 py-3 rounded-xl hover:bg-[#FFF2E8] transition">
            Explore Templates
          </a>
        </div>

        {/* Mock CV Example */}
        <div className="bg-white shadow-xl rounded-3xl p-10 max-w-3xl w-full relative">
          <div className="absolute -top-5 -left-5 bg-[#C86E3B] text-white px-4 py-1 rounded-full text-sm font-medium shadow">
            Pro Template
          </div>
          <div className="flex items-center gap-6">
            <div className="w-32 h-32 rounded-full bg-[#E6E6E6]" />
            <div>
              <h2 className="text-2xl font-bold">Sofia Yamamoto</h2>
              <p className="text-[#6F6F6E]">UX Designer | Tokyo, Japan</p>
              <p className="mt-2 text-sm text-[#6F6F6E]">
                Passionate designer blending minimalism and functionality. Skilled in Figma, UX Research, and Brand Identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#EAE7E1] py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <img src="/icons/design.svg" alt="design icon" className="mx-auto mb-4 w-12 h-12" />
            <h3 className="text-lg font-semibold mb-2">Beautiful Templates</h3>
            <p className="text-[#6F6F6E] text-sm">Choose from elegant, modern layouts tailored to your profession.</p>
          </div>
          <div>
            <img src="/icons/ai.svg" alt="ai icon" className="mx-auto mb-4 w-12 h-12" />
            <h3 className="text-lg font-semibold mb-2">AI-Guided Builder</h3>
            <p className="text-[#6F6F6E] text-sm">Smart suggestions to highlight your best achievements.</p>
          </div>
          <div>
            <img src="/icons/share.svg" alt="share icon" className="mx-auto mb-4 w-12 h-12" />
            <h3 className="text-lg font-semibold mb-2">Instant Sharing</h3>
            <p className="text-[#6F6F6E] text-sm">Download or share your CV online with a single click.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FAF8F4] text-[#6F6F6E] text-center py-8 border-t border-[#E3E0DB]">
        <p>© 2025 VitaOnline CV — Crafted for efficiency and style.</p>
      </footer>
    </>
  );
}
