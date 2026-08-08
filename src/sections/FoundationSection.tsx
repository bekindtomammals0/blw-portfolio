interface SectionLink {
  label: string;
  href: `#${string}`;
}

interface FoundationSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  links?: SectionLink[];
}

export function FoundationSection({
  id,
  eyebrow,
  title,
  description,
  links = [],
}: FoundationSectionProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      className="section-anchor border-t border-slate-300"
      aria-labelledby={titleId}
    >
      <div className="page-shell grid gap-6 py-16 sm:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] sm:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <div className="max-w-3xl">
          <h2
            id={titleId}
            className="text-3xl font-extrabold tracking-[-0.03em] text-balance sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            {description}
          </p>
          {links.length > 0 ? (
            <ul className="mt-7 flex flex-wrap gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a className="text-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
