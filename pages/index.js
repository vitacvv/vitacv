import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>VitaOnline CV | Build Your Professional Resume</title>
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">VitaOnline CV</h1>
          <nav className="space-x-6 text-gray-700 font-medium">
            <a href="#features" className="hover:text-green-700">Features</a>
            <a href="/templates" className="hover:text-green-700">Explore Templates</a>
            <a href="#contact" className="hover:text-green-700">Contact</a>
            <a
              href="/builder"
              className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
            >
              Build Your CV
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="bg-[#f8f5f0] pt-32 pb-16 min-h-screen flex flex-col items-center">
        <section className="text-center max-w-3xl px-4 mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Build a CV that fits your style and career in seconds
          </h2>
          <p className="text-gray-600 mb-10">
            Create a polished, professional CV using expertly designed templates.
          </p>
        </section>

        {/* Pro Template Mockup Preview */}
        <div className="relative bg-white w-full max-w-3xl shadow-2xl rounded-2xl overflow-hidden border border-green-100">
          <div className="grid md:grid-cols-3">
            {/* Sidebar */}
            <div className="bg-[#e8ece6] p-6 md:col-span-1">
              <div className="h-24 w-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-center text-gray-800">Jane Doe</h3>
              <p className="text-center text-sm text-gray-600 mb-6">Marketing Specialist</p>

              <div className="space-y-2 text-sm text-gray-700">
                <p>📧 jane.doe@email.com</p>
                <p>📞 +1 234 567 890</p>
                <p>📍 London, UK</p>
              </div>

              <hr className="my-4 border-green-200" />

              <h4 className="font-semibold text-gray-800 mb-2">Skills</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Social Media Strategy</li>
                <li>• SEO Optimization</li>
                <li>• Brand Management</li>
                <li>• Data Analytics</li>
              </ul>
            </div>

            {/* Main Content */}
            <div className="bg-white p-8 md:col-span-2">
              <h4 className="font-semibold text-lg text-green-800 mb-2">Experience</h4>
              <div className="mb-4">
                <p className="font-semibold text-gray-900">Marketing Manager — ABC Company</p>
                <p className="text-sm italic text-gray-600 mb-1">2020 – Present</p>
                <p className="text-gray-700">
                  Developed data-driven campaigns that increased engagement by 40%.
                </p>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-900">Assistant Marketer — BrightAds</p>
                <p className="text-sm italic text-gray-600 mb-1">2017 – 2020</p>
                <p className="text-gray-700">
                  Supported campaign strategy and managed social channels with 15K+ audience.
                </p>
              </div>

              <h4 className="font-semibold text-lg text-green-800 mb-2">Education</h4>
              <p className="text-gray-700">
                B.A. in Business Communication, <em>University of London</em>
              </p>
            </div>
          </div>

          {/* Pro badge overlay */}
          <span className="absolute top-4 right-4 bg-green-700 text-white text-xs px-3 py-1 rounded-full shadow-md">
            Pro Template
          </span>
        </div>

        {/* Features */}
        <section id="features" className="mt-20 grid md:grid-cols-3 gap-10 max-w-5xl px-6 text-center">
          <div>
            <img src="/icons/design.svg" alt="Clean Design" className="mx-auto mb-4 w-10" />
            <h3 className="font-semibold text-lg">Clean Design</h3>
            <p className="text-gray-600 mt-2">
              Minimal, elegant templates that highlight your strengths.
            </p>
          </div>

          <div>
            <img src="/icons/ai.svg" alt="Smart Suggestions" className="mx-auto mb-4 w-10" />
            <h3 className="font-semibold text-lg">Smart Suggestions</h3>
            <p className="text-gray-600 mt-2">
              AI-powered tips to refine your wording and layout.
            </p>
          </div>

          <div>
            <img src="/icons/share.svg" alt="Easy Sharing" className="mx-auto mb-4 w-10" />
            <h3 className="font-semibold text-lg">Share Easily</h3>
            <p className="text-gray-600 mt-2">
              Export or share your CV instantly with one click.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t py-6 text-center text-gray-500 mt-10">
        © {new Date().getFullYear()} VitaOnline CV. All rights reserved.
      </footer>
    </>
  );
}
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>VitaOnline CV | Build Your Professional Resume</title>
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">VitaOnline CV</h1>
          <nav className="space-x-6 text-gray-700 font-medium">
            <a href="#features" className="hover:text-green-700">Features</a>
            <a href="/templates" className="hover:text-green-700">Explore Templates</a>
            <a href="#contact" className="hover:text-green-700">Contact</a>
            <a
              href="/builder"
              className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
            >
              Build Your CV
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="bg-[#f8f5f0] pt-32 pb-16 min-h-screen flex flex-col items-center">
        <section className="text-center max-w-3xl px-4 mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Build a CV that fits your style and career in seconds
          </h2>
          <p className="text-gray-600 mb-10">
            Create a polished, professional CV using expertly designed templates.
          </p>
        </section>

        {/* Pro Template Mockup Preview */}
        <div className="relative bg-white w-full max-w-3xl shadow-2xl rounded-2xl overflow-hidden border border-green-100">
          <div className="grid md:grid-cols-3">
            {/* Sidebar */}
            <div className="bg-[#e8ece6] p-6 md:col-span-1">
              <div className="h-24 w-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-center text-gray-800">Jane Doe</h3>
              <p className="text-center text-sm text-gray-600 mb-6">Marketing Specialist</p>

              <div className="space-y-2 text-sm text-gray-700">
                <p>📧 jane.doe@email.com</p>
                <p>📞 +1 234 567 890</p>
                <p>📍 London, UK</p>
              </div>

              <hr className="my-4 border-green-200" />

              <h4 className="font-semibold text-gray-800 mb-2">Skills</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Social Media Strategy</li>
                <li>• SEO Optimization</li>
                <li>• Brand Management</li>
                <li>• Data Analytics</li>
              </ul>
            </div>

            {/* Main Content */}
            <div className="bg-white p-8 md:col-span-2">
              <h4 className="font-semibold text-lg text-green-800 mb-2">Experience</h4>
              <div className="mb-4">
                <p className="font-semibold text-gray-900">Marketing Manager — ABC Company</p>
                <p className="text-sm italic text-gray-600 mb-1">2020 – Present</p>
                <p className="text-gray-700">
                  Developed data-driven campaigns that increased engagement by 40%.
                </p>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-gray-900">Assistant Marketer — BrightAds</p>
                <p className="text-sm italic text-gray-600 mb-1">2017 – 2020</p>
                <p className="text-gray-700">
                  Supported campaign strategy and managed social channels with 15K+ audience.
                </p>
              </div>

              <h4 className="font-semibold text-lg text-green-800 mb-2">Education</h4>
              <p className="text-gray-700">
                B.A. in Business Communication, <em>University of London</em>
              </p>
            </div>
          </div>

          {/* Pro badge overlay */}
          <span className="absolute top-4 right-4 bg-green-700 text-white text-xs px-3 py-1 rounded-full shadow-md">
            Pro Template
          </span>
        </div>

        {/* Features */}
        <section id="features" className="mt-20 grid md:grid-cols-3 gap-10 max-w-5xl px-6 text-center">
          <div>
            <img src="/icons/design.svg" alt="Clean Design" className="mx-auto mb-4 w-10" />
            <h3 className="font-semibold text-lg">Clean Design</h3>
            <p className="text-gray-600 mt-2">
              Minimal, elegant templates that highlight your strengths.
            </p>
          </div>

          <div>
            <img src="/icons/ai.svg" alt="Smart Suggestions" className="mx-auto mb-4 w-10" />
            <h3 className="font-semibold text-lg">Smart Suggestions</h3>
            <p className="text-gray-600 mt-2">
              AI-powered tips to refine your wording and layout.
            </p>
          </div>

          <div>
            <img src="/icons/share.svg" alt="Easy Sharing" className="mx-auto mb-4 w-10" />
            <h3 className="font-semibold text-lg">Share Easily</h3>
            <p className="text-gray-600 mt-2">
              Export or share your CV instantly with one click.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t py-6 text-center text-gray-500 mt-10">
        © {new Date().getFullYear()} VitaOnline CV. All rights reserved.
      </footer>
    </>
  );
}
