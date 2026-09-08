import Link from "next/link";
import { Footer, Header } from "./components";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <Header />
        <div className="eyebrow"><span /> Independent creative studio</div>
        <h1>We find the<br /><em>signal</em> in the noise.</h1>
        <div className="hero-bottom">
          <p>ONE15 Media helps brands sound better, perform smarter, and make decisions grounded in evidence—not guesswork.</p>
          <Link className="circle-link" href="/audit" aria-label="Explore ONE15 Audit">Explore<br />the audit <b>↘</b></Link>
        </div>
        <div className="wave" aria-hidden="true">{Array.from({ length: 38 }, (_, i) => <i key={i} style={{ height: `${10 + ((i * 37) % 62)}px` }} />)}</div>
      </section>

      <section className="intro" id="about">
        <span className="section-num">01 / WHAT WE DO</span>
        <div>
          <h2>Creative instinct.<br /><em>Measurable</em> impact.</h2>
          <p>We bring the ears of a producer and the eye of an analyst to every project. From sound and storytelling to unbiased website audits, our work is made to move people—and move the numbers.</p>
        </div>
      </section>

      <section className="services" id="work">
        <article><span>01</span><h3>Audio &amp; sound</h3><p>Original music, sonic identity, mixing, and production that make brands recognizable with their eyes closed.</p><b>↗</b></article>
        <article><span>02</span><h3>Creative direction</h3><p>Focused ideas and thoughtful execution across campaigns, content, and brand experiences.</p><b>↗</b></article>
        <article className="feature"><span>03</span><p className="tag">NEW SERVICE</p><h3>ONE15 Audit</h3><p>Independent conversion analysis. Clear findings. No vendor agenda.</p><Link href="/audit">Discover the audit →</Link></article>
      </section>
      <Footer />
    </main>
  );
}
