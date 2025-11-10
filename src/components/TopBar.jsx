import { Link, NavLink } from 'react-router-dom';

const TopBar = () => (
  <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:backdrop-blur">
    <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-5">
      <Link to="/" className="flex items-center gap-3 text-text-dark">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-coral text-white shadow-card">
          <span className="text-lg font-semibold">PP</span>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-text-dark">
            Pilates Pro
          </p>
          <span className="text-xs text-text-muted">Professores em primeiro lugar</span>
        </div>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium text-text-muted sm:flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition hover:text-text-dark ${isActive ? 'text-text-dark' : ''}`
          }
        >
          Início
        </NavLink>
        <NavLink
          to="/equipamentos/cadillac"
          className={({ isActive }) =>
            `transition hover:text-text-dark ${isActive ? 'text-text-dark' : ''}`
          }
        >
          Biblioteca
        </NavLink>
        <span className="rounded-full bg-white/70 px-4 py-1 text-[11px] uppercase tracking-[0.2em] text-coral shadow-soft">
          MVP
        </span>
      </nav>
      <Link to="/equipamentos/cadillac" className="hidden sm:inline-flex cta-button">
        Explorar
      </Link>
    </div>
  </header>
);

export default TopBar;

