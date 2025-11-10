import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center gap-6 rounded-3xl bg-white/80 p-12 text-center shadow-soft">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose text-coral shadow-card">
      <span className="text-2xl font-semibold">404</span>
    </div>
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold text-text-dark">Conteúdo não encontrado</h1>
      <p className="text-sm text-text-muted">
        O link pode ter sido movido ou ainda está em desenvolvimento. Que tal explorar nossa
        biblioteca de equipamentos?
      </p>
    </div>
    <div className="flex flex-wrap justify-center gap-3">
      <Link
        to="/"
        className="inline-flex items-center justify-center rounded-full bg-coral px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-transform duration-200 ease-in-out-soft hover:-translate-y-0.5 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
      >
        Voltar ao início
      </Link>
      <Link
        to="/equipamentos/cadillac"
        className="inline-flex items-center justify-center rounded-full border border-coral/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-coral transition hover:bg-coral hover:text-white"
      >
        Biblioteca
      </Link>
    </div>
  </div>
);

export default NotFoundPage;

