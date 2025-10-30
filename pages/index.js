import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>VitaCV — Build Your Professional Digital CV</title>
        <meta
          name="description"
          content="Create, customize, and share your professional CV easily with VitaCV."
        />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-[#f9f6f1] text-gray-800">
        {/* Navbar */}
        <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-sm">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">👜</span>
            <h1 className="text-xl font-semibold text-gray-800">VitaCV</h1>
          </div>
          <div className="space-x-4">
            <a href="#features" className="hover:text-orange-500 transition">Features</a>
            <a href="#builder" className="hover:text-orange-500 transition">Build CV</a>
            <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center mt-20 px-6 max-w-2xl">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Build your CV with confidence
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            VitaCV helps you design a clean, professional, and modern CV that gets attention — 
            in minutes.
          </p>
          <a
            href="/builder"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Start Building
          </a>
        </section>

        {/* Features */}
        <section id="features" className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Clean Design</h3>
            <p className="text-gray-600">Minimal, professional templates that highlight your strengths.</p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Smart Suggestions</h3>
            <p className="text-gray-600">Get AI-powered tips for better structure and wording.</p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Share Easily</h3>
            <p className="text-gray-600">Export your CV or share it online instantly.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 py-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} VitaCV. All rights reserved.
        </footer>
      </main>
    </>
  );
}

