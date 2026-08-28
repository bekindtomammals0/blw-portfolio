const approachSteps = [
  {
    title: 'Understand the actual bottleneck',
    description:
      'Start with the people, decisions, and friction in the real workflow—not with a preferred tool.',
  },
  {
    title: 'Make the process explicit',
    description:
      'Turn assumptions, handoffs, information, and desired outcomes into a model that can be examined.',
  },
  {
    title: 'Build the simplest constraint-aware system',
    description:
      'Choose software, AI, or automation only where it helps the system handle its actual requirements and boundaries.',
  },
  {
    title: 'Test, observe, simplify, and evolve',
    description:
      'Validate behavior in use, learn from incorrect or awkward outcomes, and revise the system as the work changes.',
  },
] as const;

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="section-anchor border-t border-slate-300"
      aria-labelledby="approach-title"
    >
      <div className="page-shell py-16 sm:py-24">
        <p className="eyebrow">Approach</p>
        <h2 id="approach-title" className="section-title">
          Structure the problem before choosing the technology.
        </h2>
        <p className="section-intro">
          I use a four-step engineering method to move from an inefficient or
          ambiguous process toward a working system that can adapt.
        </p>
        <ol className="approach-grid">
          {approachSteps.map((step, index) => (
            <li key={step.title}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <p className="approach-note">
          AI-assisted development can accelerate implementation, debugging,
          documentation, and iteration. Requirements, constraints, validation,
          and final engineering decisions remain human-directed.
        </p>
      </div>
    </section>
  );
}
