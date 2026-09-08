import Link from "next/link";
import { Footer, Header } from "../components";

const findings = [
  ["01", "Friction map", "Where visitors hesitate, get confused, or leave—and what is likely causing it."],
  ["02", "Conversion review", "A focused review of your messaging, calls to action, mobile experience, and trust signals."],
  ["03", "Priority action plan", "Clear, ranked fixes based on impact and effort so you know what to do first."],
  ["04", "Recorded walkthrough", "A concise video explanation of the findings you can replay or share with your team."],
];

export default function AuditPage() {
  return <main className="audit-page">
    <section className="audit-hero">
      <Header dark />
      <div className="eyebrow light"><span /> Independent website intelligence</div>
      <h1>Your website may be<br />costing you <em>customers.</em></h1>
      <div className="audit-hero-copy">
        <p>Find the leaks before you spend another dollar driving traffic. Get an objective, expert review—with no pitch hiding at the end.</p>
        <Link href="#scan" className="button coral">Get your $149 scan <span>↗</span></Link>
      </div>
      <div className="hero-proof"><span>24-hour turnaround</span><span>Actionable findings</span><span>No vendor bias</span></div>
    </section>

    <section className="manifesto">
      <span className="section-num">THE ONE15 STANDARD</span>
      <div><h2>Pure Data.<br /><em>Zero Bias.</em></h2><p>Most website reviews come from someone trying to sell you a redesign, an ad package, or a monthly retainer. Ours doesn&apos;t.</p><p><strong>We audit websites. We don&apos;t recommend vendors.</strong> You get honest findings, clear priorities, and the freedom to act on them however you choose.</p></div>
    </section>

    <section className="deliverables">
      <div className="deliverable-heading"><span className="section-num">WHAT YOU GET</span><h2>A sharper website<br />by <em>tomorrow.</em></h2></div>
      <div className="finding-list">{findings.map(([n, title, copy]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
    </section>

    <section className="sample">
      <div><span className="section-num">SAMPLE FINDING / 02</span><h2>Your strongest proof is hiding below the fold.</h2><p>Visitors see a broad promise before they see any evidence. On mobile, testimonials appear after 6.5 screen lengths—too late to resolve the trust gap at the decision point.</p><div className="recommend"><b>RECOMMENDATION</b><p>Move one outcome-led testimonial directly beneath the primary CTA. Add a specific result to the hero subhead.</p></div></div>
      <div className="score-card"><div><small>TRUST SIGNAL VISIBILITY</small><strong>38<span>/100</span></strong></div><div className="meter"><i /></div><p><b>HIGH IMPACT</b><span>Low implementation effort</span></p></div>
    </section>

    <section className="pricing" id="scan">
      <div className="price-intro"><span className="section-num">START HERE</span><h2>Find what&apos;s<br /><em>getting in the way.</em></h2><p>Choose the fast, focused scan or request a comprehensive audit for deeper insight.</p></div>
      <article className="price-card primary"><p>CONVERSION LEAK SCAN</p><h3><sup>$</sup>149</h3><span>One-time payment</span><ul><li>Homepage + key conversion page</li><li>Mobile and desktop review</li><li>Top 5 conversion leaks</li><li>Prioritized recommendations</li><li>Video walkthrough</li><li>Delivered within 24 hours</li></ul><a className="button dark" href="mailto:hello@115audio.com?subject=Request%20a%20%24149%20Conversion%20Leak%20Scan">Request your scan <span>↗</span></a><small>Secure Stripe checkout coming soon</small></article>
      <article className="price-card"><p>FULL WEBSITE AUDIT</p><h3><sup>$</sup>495</h3><span>For multi-page websites</span><ul><li>Full customer journey review</li><li>Messaging and offer analysis</li><li>Conversion and trust audit</li><li>Detailed written report</li><li>30-minute findings call</li></ul><Link className="button outline" href="#contact">Request an audit <span>↗</span></Link></article>
    </section>

    <section className="contact" id="contact"><div><span className="section-num">LET&apos;S TALK</span><h2>Not sure which<br />audit you need?</h2><p>Tell us about your website and what you want it to do better. We&apos;ll reply with a straightforward recommendation.</p><a href="mailto:hello@115audio.com">hello@115audio.com ↗</a></div><form action="mailto:hello@115audio.com" method="post" encType="text/plain"><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@company.com" /></label><label>Website<input name="website" type="url" placeholder="https://" /></label><label>What can we help with?<textarea name="message" rows={3} placeholder="Tell us a little about your goals" /></label><button className="button coral" type="submit">Send request <span>↗</span></button></form></section>
    <Footer />
  </main>;
}
