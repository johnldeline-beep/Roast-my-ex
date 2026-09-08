import Link from "next/link";

export function Mark() {
  return (
    <svg aria-hidden="true" className="mark" viewBox="0 0 46 46" fill="none">
      <path d="M4 34V12h7v22H4Zm12-9V5h7v20h-7Zm12 16V18h7v23h-7Zm12-12V10h3v19h-3Z" fill="currentColor" />
    </svg>
  );
}

export function Header({ dark = false }: { dark?: boolean }) {
  return (
    <header className={`site-header ${dark ? "on-dark" : ""}`}>
      <Link className="brand" href="/" aria-label="ONE15 Media home">
        <Mark />
        <span>ONE15<small>MEDIA</small></span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#work">Work</Link>
        <Link href="/audit">Audit</Link>
        <Link href="/#about">About</Link>
        <Link className="nav-cta" href="/audit#contact">Start a project <span>↗</span></Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-brand"><Mark /><span>ONE15<small>MEDIA</small></span></div>
      <div><p>Make the signal clearer.</p><a href="mailto:hello@115audio.com">hello@115audio.com</a></div>
      <div className="footer-meta"><span>Independent · Objective · Human</span><span>© {new Date().getFullYear()} ONE15 Media</span></div>
    </footer>
  );
}
