import { contact } from '../data/contact';

export function ContactSection() {
  const availableChannels = contact.channels.filter(
    (
      channel,
    ): channel is (typeof contact.channels)[number] & { href: string } =>
      'href' in channel && Boolean(channel.href),
  );

  return (
    <section
      id="contact"
      className="section-anchor border-t border-slate-300 bg-slate-950 text-white"
      aria-labelledby="contact-title"
    >
      <div className="page-shell contact-layout py-16 sm:py-24">
        <div>
          <p className="eyebrow text-amber-400">Contact</p>
          <h2 id="contact-title" className="section-title">
            Bring the problem, constraints, and desired outcome.
          </h2>
          <p className="section-intro text-slate-300">
            If a workflow or operational problem needs a scoped technical
            solution, share what is happening now and what a better outcome
            should make possible.
          </p>
        </div>
        <div>
          <p className="contact-location">{contact.location}</p>
          <ul className="contact-links">
            {availableChannels.map((channel) => (
              <li key={channel.label}>
                <a href={channel.href}>{channel.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
