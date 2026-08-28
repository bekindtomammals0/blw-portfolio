import type { ProjectEvidence as ProjectEvidenceData } from '../types/portfolio';

interface ProjectEvidenceProps {
  evidence: ProjectEvidenceData;
}

export function ProjectEvidence({ evidence }: ProjectEvidenceProps) {
  if (evidence.type === 'workflow' && evidence.steps?.length) {
    return (
      <figure className="evidence-panel" aria-label={evidence.alt}>
        <div className="workflow" aria-hidden="true">
          {evidence.steps.map((step, index) => (
            <div className="workflow-step" key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
        {evidence.caption ? <figcaption>{evidence.caption}</figcaption> : null}
      </figure>
    );
  }

  if (evidence.type === 'sample-output' && evidence.sampleRows?.length) {
    return (
      <figure className="evidence-panel" aria-label={evidence.alt}>
        <dl className="sample-output">
          {evidence.sampleRows.map((row) => (
            <div key={`${row.label}-${row.value}`}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
        {evidence.caption ? <figcaption>{evidence.caption}</figcaption> : null}
      </figure>
    );
  }

  if (!evidence.src) {
    return null;
  }

  return (
    <figure className="evidence-panel">
      <img src={evidence.src} alt={evidence.alt ?? ''} loading="lazy" />
      {evidence.caption ? <figcaption>{evidence.caption}</figcaption> : null}
    </figure>
  );
}
