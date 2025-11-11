import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6f3] text-gray-800 font-sans">
      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-[#e8e5e1] bg-white/70 backdrop-blur-md sticky top-0 z-10">
        <h1 className="text-2xl font-semibold text-[#4a4a4a]">
          <span className="text-[#9cab88]">VitaOnline</span> CV
        </h1>
        <nav className="space-x-6 text-sm font-medium">
          <Link href="#features" className="hover:text-[#9cab88]">
            Features
          </Link>
          <Link href="/templates" className="hover:text-[#9cab88]">
            Templates
          </Link>
          <Link href="/builder" className="hover:text-[#9cab88]">
            Builder
          </Link>
          <Link href="#contact" className="hover:text-[#9cab88]">
            Contact
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center text-center py-20 px-4">
        <h2 className="text-4xl font-semibold mb-4 text-[#4a4a4a]">
          Build a CV that fits your{" "}
          <span className="text-[#9cab88]">style and career</span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl">
          Create a stunning professional CV in seconds. Choose your favorite
          style, customize it easily, and download instantly.
        </p>

        <div className="relative w-[320px] h-[420px] border-4 border-[#9cab88]/40 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/template_images/executive.jpg"
            alt="CV Mockup Example"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute top-4 right-4 bg-[#9cab88] text-white text-xs px-3 py-1 rounded-full shadow-md">
            PRO TEMPLATE
          </div>
        </div>

        <Link
          href="/templates"
          className="mt-10 bg-[#9cab88] text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#8ca87e] transition"
        >
          Explore Templates
        </Link>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-16 bg-white border-t border-[#e8e5e1]">
        <h3 className="text-2xl font-semibold text-center mb-10">
          Why choose VitaOnline CV?
        </h3>
        <div className="grid md:grid-cols-3 gap-8 px-10 text-center">
          <div>
            <Image
              src="/icons/design.svg"
              width={48}
              height={48}
              alt="Design Icon"
              className="mx-auto mb-4"
            />
            <h4 className="font-semibold mb-2 text-[#9cab88]">
              Elegant Design
            </h4>
            <p className="text-gray-600">
              Crafted templates that blend style and clarity for modern
              professionals.
            </p>
          </div>

          <div>
            <Image
              src="/icons/ai.svg"
              width={48}
              height={48}
              alt="AI Icon"
              className="mx-auto mb-4"
            />
            <h4 className="font-semibold mb-2 text-[#9cab88]">
              Smart Builder
            </h4>
            <p className="text-gray-600">
              Fill your information once—watch your CV auto-format instantly.
            </p>
          </div>

          <div>
            <Image
              src="/icons/share.svg"
              width={48}
              height={48}
              alt="Share Icon"
              className="mx-auto mb-4"
            />
            <h4 className="font-semibold mb-2 text-[#9cab88]">Instant Export</h4>
            <p className="text-gray-600">
              Download or share your polished CV in seconds with one click.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="text-center text-sm text-gray-500 py-8 border-t border-[#e8e5e1]"
      >
        © {new Date().getFullYear()} VitaOnline CV — Your career, your design.
      </footer>
    </main>
  );
}
