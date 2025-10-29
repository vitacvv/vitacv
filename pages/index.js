import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div style={styles.container}>
      <Head>
        <title>VitaCV — Build your professional CV</title>
        <meta name="description" content="Create your modern CV in minutes" />
      </Head>

      <header style={styles.header}>
        <div style={styles.logo}>
          <Image src="/icon.svg" alt="VitaCV logo" width={32} height={32} />
          <h1 style={styles.title}>VitaCV</h1>
        </div>
        <nav>
          <a href="#features" style={styles.navLink}>Features</a>
          <a href="#builder" style={styles.navLink}>CV Builder</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <main style={styles.main}>
        <h2 style={styles.headline}>Build a beautiful CV — effortlessly.</h2>
        <p style={styles.subtext}>
          VitaCV helps you design clean, professional resumes that stand out.
        </p>
        <a href="/builder" style={styles.cta}>Start Building</a>
      </main>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} VitaCV — All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f9f6f1",
    color: "#333",
    fontFamily: "'Inter', sans-serif",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 3rem",
    backgroundColor: "#fff8f0",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#d87b37",
  },
  navLink: {
    marginLeft: "1.5rem",
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
  },
  main: {
    flex: 1,
    textAlign: "center",
    padding: "6rem 2rem",
  },
  headline: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#2c2c2c",
  },
  subtext: {
    fontSize: "1.1rem",
    color: "#555",
    margin: "1rem auto 2rem",
    maxWidth: "600px",
  },
  cta: {
    backgroundColor: "#d87b37",
    color: "#fff",
    padding: "0.9rem 1.8rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
  },
  footer: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: "#fff8f0",
    color: "#777",
    fontSize: "0.9rem",
  },
};

