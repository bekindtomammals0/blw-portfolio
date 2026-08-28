import type { DevelopmentNote, PortfolioProject } from '../types/portfolio';

interface NotesSectionProps {
  notes: DevelopmentNote[];
  projects: PortfolioProject[];
}

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'long',
  timeZone: 'UTC',
});

export function NotesSection({ notes, projects }: NotesSectionProps) {
  if (notes.length === 0) {
    return null;
  }

  const projectsBySlug = new Map(
    projects.map((project) => [project.slug, project]),
  );

  return (
    <section
      id="notes"
      className="section-anchor border-t border-slate-300"
      aria-labelledby="notes-title"
    >
      <div className="page-shell py-16 sm:py-24">
        <p className="eyebrow">Engineering journal</p>
        <h2 id="notes-title" className="section-title">
          Development notes
        </h2>
        <ol className="notes-grid" aria-label="Development notes">
          {notes.map((note) => {
            const project = projectsBySlug.get(note.projectSlug);

            return (
              <li key={note.id}>
                <article
                  className="development-note"
                  aria-label={`${note.type} note for ${project?.name ?? note.projectSlug}`}
                >
                  <div className="note-metadata">
                    <time dateTime={note.date}>
                      {dateFormatter.format(new Date(`${note.date}T00:00:00Z`))}
                    </time>
                    <span>{note.type}</span>
                  </div>
                  <p className="note-project">
                    {project ? (
                      <a
                        className="text-link"
                        href={`#project-${project.slug}`}
                      >
                        {project.name}
                      </a>
                    ) : (
                      note.projectSlug
                    )}
                  </p>
                  <p className="note-text">{note.text}</p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
