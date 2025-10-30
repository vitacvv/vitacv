import Head from "next/head";
import styles from "../styles/globals.module.css";

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

      <div className={styles.container}>
        <nav className={styles.nav}>
          <h1 className={styles.logo}>VitaCV</h1>
          <ul className={styles.menu}>
            <li>Features</li>
            <li>Templates</li>
            <li>Builder</li>
            <li>Contact</li>
          </ul>
        </nav>

        <section className={styles.hero}>
          <h2 className={styles.title}>Build a beautiful CV — effortlessly.</h2>
          <p className={styles.subtitle}>
            Create elegant, minimalist resumes with VitaCV's intuitive builder.
          </p>
          <button className={styles.button}>Start Building</button>
        </section>

        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} VitaCV. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
