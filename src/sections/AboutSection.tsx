export function AboutSection() {
  return (
    <section
      id="about"
      className="section-anchor border-t border-slate-300"
      aria-labelledby="about-title"
    >
      <div className="page-shell about-layout py-16 sm:py-24">
        <p className="eyebrow">About</p>
        <div>
          <h2 id="about-title" className="section-title mt-0">
            A practical systems builder working across software and operations.
          </h2>
          <div className="about-copy">
            <p>
              I am Brian Christopher Bulawan, based in the Philippines, with a
              professional focus on AI, automation, and systems development. I
              build structured solutions for workflows that are inefficient,
              ambiguous, or difficult to manage consistently.
            </p>
            <p>
              My interests include AI-assisted engineering, automation,
              scheduling, data coordination, and practical operational systems.
              Experience in real working environments—including university
              operations—provides context for that work without defining the
              limits of it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
