import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar.jsx';

const AppLayout = () => (
  <div className="min-h-screen w-full bg-sky text-text-dark">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky via-white to-rose/30" />
    <TopBar />
    <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <Outlet />
    </main>
    <footer className="mt-auto border-t border-white/40 bg-white/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Pilates Pro. MVP para apresentação.</span>
        <div className="flex gap-4">
          <a
            href="mailto:contato@pilatespro.app"
            className="transition hover:text-text-dark"
          >
            contato@pilatespro.app
          </a>
          <a href="https://pilatespro.app" className="transition hover:text-text-dark">
            pilatespro.app
          </a>
        </div>
      </div>
    </footer>
  </div>
);

export default AppLayout;

