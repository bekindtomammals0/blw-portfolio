import { contact } from '../data/contact';

export function HeroSection() {
  const profileChannels = contact.channels.filter(
    (channel) =>
      channel.label === 'Email' ||
      channel.label === 'GitHub' ||
      channel.label === 'LinkedIn',
  );

  return (
    <section
      className="page-shell grid min-h-[72vh] content-center gap-8 py-20 sm:py-28"
      aria-labelledby="hero-title"
    >
      <div className="max-w-4xl">
        <p className="eyebrow">Foundation preview</p>
        <h1
          id="hero-title"
          className="mt-4 text-4xl font-black tracking-[-0.04em] text-balance sm:text-6xl lg:text-7xl"
        >
          Brian Christopher Bulawan
        </h1>
        <p className="mt-5 text-xl font-bold text-slate-700 sm:text-2xl">
          AI, Automation &amp; Systems Developer
        </p>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
          I turn inefficient processes into structured, adaptable systems using
          software, AI, and automation.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <a className="button button-primary" href="#work">
          View selected work
        </a>
        <a className="button button-secondary" href="#contact">
          Contact
        </a>
      </div>
      <nav className="hero-profile-links" aria-label="Professional profiles">
        {profileChannels.map((channel) => (
          <a key={channel.label} href={channel.href}>
            {channel.label}
          </a>
        ))}
      </nav>
    </section>
  );
}
