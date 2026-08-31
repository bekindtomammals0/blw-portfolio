import { useLayoutEffect, useRef } from 'react';

import { getPrimaryNavigation } from '../app/navigation';

interface SiteHeaderProps {
  hasNotes: boolean;
}

export function SiteHeader({ hasNotes }: SiteHeaderProps) {
  const navigation = getPrimaryNavigation(hasNotes);
  const headerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const updateHeaderOffset = () => {
      document.documentElement.style.setProperty(
        '--header-offset',
        `${header.getBoundingClientRect().height}px`,
      );
    };

    updateHeaderOffset();
    const observer =
      typeof ResizeObserver === 'undefined'
        ? undefined
        : new ResizeObserver(updateHeaderOffset);
    observer?.observe(header);

    return () => {
      observer?.disconnect();
      document.documentElement.style.removeProperty('--header-offset');
    };
  }, []);

  return (
    <header ref={headerRef} className="site-header">
      <div className="site-header-layout page-shell">
        <a
          className="brand-link"
          href="#top"
          aria-label="Brian Christopher Bulawan, back to top"
        >
          BLW
        </a>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm font-semibold text-slate-700">
            {navigation.map((item) => (
              <li key={item.href}>
                <a className="nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
