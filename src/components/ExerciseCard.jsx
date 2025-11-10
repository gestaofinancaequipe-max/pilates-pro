import { Link } from 'react-router-dom';

const MuscleBadge = ({ label }) => (
  <span className="rounded-full bg-rose/60 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-text-dark/80">
    {label}
  </span>
);

const ExerciseCard = ({ exercise }) => {
  if (!exercise) return null;

  const detailPath = `/exercicios/${exercise.id}`;
  const coverImage =
    exercise.video?.thumb ||
    'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=900&q=80';

  return (
    <Link
      to={detailPath}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white/90 shadow-soft transition hover:-translate-y-2 hover:shadow-card"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={coverImage}
          loading="lazy"
          alt={exercise.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-coral">
          {exercise.focus}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 px-5 py-5">
        <div>
          <h4 className="text-base font-semibold text-text-dark">{exercise.title}</h4>
          <p className="mt-1 text-sm text-text-muted line-clamp-2">{exercise.summary}</p>
        </div>
        <div className="mt-auto flex flex-wrap gap-2">
          {exercise.muscles.slice(0, 3).map((muscle) => (
            <MuscleBadge key={muscle} label={muscle} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;

