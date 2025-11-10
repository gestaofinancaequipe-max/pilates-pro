import { Link } from 'react-router-dom';

const ChecklistIcon = ({ className = '' }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 2.75 2.75L9.75 13" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.25V6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 6.75H9a2.25 2.25 0 0 0-2.25 2.25v0"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 6.75h.75A2.25 2.25 0 0 1 18 9v0"
    />
  </svg>
);

const HeroSection = () => (
  <section className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-soft backdrop-blur sm:p-10">
    <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
      <div className="max-w-2xl space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-rose/60 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-text-dark">
          Biblioteca pedagógica
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-text-dark sm:text-4xl">
            Pilates Pro · Curadoria para professores
          </h1>
          <p className="text-base leading-relaxed text-text-muted sm:text-lg">
            Conteúdos práticos, linguagem direta e foco em decisões pedagógicas. Use a biblioteca
            para preparar aulas, revisar técnicas e discutir progressões com sua equipe.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-text-muted sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-2xl bg-sky/70 p-4">
            <ChecklistIcon className="h-5 w-5 text-coral" />
            <p>Exercícios organizados por equipamento com notas sobre foco e grupos musculares.</p>
          </div>
          <div className="flex items-start gap-3 rounded-2xl bg-sky/70 p-4">
            <ChecklistIcon className="h-5 w-5 text-coral" />
            <p>Estrutura pronta para níveis, variações e contraindicações sem refazer o layout.</p>
          </div>
        </div>
      </div>
      <div className="flex w-full max-w-xs flex-col gap-4 rounded-3xl border border-rose/50 bg-rose/40 p-5 text-sm text-text-dark sm:self-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral">
          Agenda de produção
        </p>
        <ul className="space-y-3">
          <li>• Registrar feedback de instrutores parceiros e ajustar vocabulário técnico</li>
          <li>• Mapear tags por objetivo pedagógico (controle, mobilidade, força, recuperação)</li>
          <li>• Integrar favoritos e exportação de planos de aula</li>
        </ul>
        <Link
          to="/equipamentos/cadillac"
          className="inline-flex items-center justify-center rounded-full bg-coral px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-transform duration-200 ease-in-out-soft hover:-translate-y-0.5 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral self-start"
        >
          Abrir biblioteca
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;

