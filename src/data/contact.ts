export interface ContactChannel {
  label: 'Email' | 'GitHub' | 'LinkedIn' | 'Upwork';
  href?: string;
}

export const contact = {
  location: 'Philippines',
  channels: [
    {
      label: 'Email',
      href: 'mailto:brianbulawan5@gmail.com',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/bekindtomammals0',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bbulawan/',
    },
    {
      label: 'Upwork',
    },
  ] satisfies ContactChannel[],
} as const;
