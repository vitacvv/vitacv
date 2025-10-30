import Head from "next/head";
import "../styles/globals.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>VitaCV – Build a Beautiful CV Effortlessly</title>
        <meta
          name="description"
          content="VitaCV helps you design clean, professional resumes that stand out."
        />
      </Head>

      <div className="container">
        <nav className="nav">
          <h1 className="logo">VitaCV</h1>
          <ul className="menu">
            <li>Features</li>
            <li>Templates</li>
            <li>Builder</li>
            <li>Contact</li>
          </ul>
        </nav>

        <section className="hero">
          <h2 className="title">Build a beautiful CV — effortlessly.</h2>
          <p className="subtitle">
            Create elegant, minimalist resumes with VitaCV's intuitive builder.
          </p>
          <button className="button">Start Building</button>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} VitaCV. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
