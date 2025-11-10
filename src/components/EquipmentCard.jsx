import { Link } from 'react-router-dom';

const IconCadillac = ({ className = '' }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="6" y="14" width="52" height="26" rx="6" />
    <path d="M12 40v8M52 40v8M6 48h52" strokeLinecap="round" />
    <path d="M24 23h16M20 30h24" strokeLinecap="round" />
  </svg>
);

const IconReformer = ({ className = '' }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="8" y="28" width="48" height="10" rx="5" />
    <path d="M16 28v-6a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v6" />
    <path d="M10 38v10M54 38v10M6 48h52" strokeLinecap="round" />
  </svg>
);

const IconChair = ({ className = '' }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="18" y="14" width="28" height="14" rx="4" />
    <path d="M16 28h32l4 8H12l4-8Z" />
    <path d="M18 36v14M46 36v14M14 50h36" strokeLinecap="round" />
  </svg>
);

const IconCircle = ({ className = '' }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="32" cy="32" r="18" />
    <circle cx="32" cy="32" r="8" />
    <path d="M14 22 8 16M50 22l6-6M14 42l-6 6M50 42l6 6" strokeLinecap="round" />
  </svg>
);

const IconBall = ({ className = '' }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="32" cy="32" r="20" />
    <path d="M12 32h40M24 14c4 6 6 12 6 18s-2 12-6 18M40 14c-4 6-6 12-6 18s2 12 6 18" />
  </svg>
);

const IconBand = ({ className = '' }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="10" y="18" width="44" height="12" rx="6" />
    <rect x="6" y="34" width="52" height="12" rx="6" />
    <path d="M10 24h12M42 24h12M12 40h10M42 40h10" strokeLinecap="round" />
  </svg>
);

const iconMap = {
  cadillac: IconCadillac,
  reformer: IconReformer,
  'step-chair': IconChair,
  'magic-circle': IconCircle,
  bola: IconBall,
  'faixa-elastica': IconBand,
};

const EquipmentCard = ({ equipment }) => {
  if (!equipment) return null;

  const Icon = iconMap[equipment.id] ?? IconCadillac;

  return (
    <Link
      to={`/equipamentos/${equipment.id}`}
      className="group flex h-full flex-col justify-between rounded-3xl border border-white/70 bg-white/90 p-6 shadow-soft transition hover:-translate-y-2 hover:border-coral/40 hover:shadow-card"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky text-coral shadow-inner">
          <Icon className="h-8 w-8" />
        </div>
        <span className="rounded-full bg-rose/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-text-dark">
          {equipment.tags.slice(0, 2).join(' • ')}
        </span>
      </div>
      <div className="mt-6 space-y-3">
        <h3 className="text-lg font-semibold text-text-dark">{equipment.name}</h3>
        <p className="text-sm leading-relaxed text-text-muted line-clamp-4">
          {equipment.description}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between text-xs font-medium text-text-muted">
        <span>{equipment.level.join(' • ')}</span>
        <span className="inline-flex items-center gap-1 text-coral">
          Ver exercícios
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-4 w-4 transition group-hover:translate-x-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 5l8 7-8 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default EquipmentCard;

