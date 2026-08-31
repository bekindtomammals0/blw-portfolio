import { getPrimaryNavigation } from '../app/navigation';

interface SiteHeaderProps {
  hasNotes: boolean;
}

export function SiteHeader({ hasNotes }: SiteHeaderProps) {
  const navigation = getPrimaryNavigation(hasNotes);

  return (
    <header className="site-header">
      <div className="page-shell flex items-center justify-between gap-4 py-4">
        <a
          className="brand-link"
          href="#top"
          aria-label="Brian Christopher Bulawan, back to top"
        >
          BLW
        </a>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center justify-end gap-x-5 gap-y-2 text-sm font-semibold text-slate-700">
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
