import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton.jsx';
import Tag from '../components/Tag.jsx';
import VideoPlayer from '../components/VideoPlayer.jsx';
import { useExercise } from '../features/exercises/hooks.js';

const Section = ({ title, children }) => (
  <section className="space-y-3 rounded-3xl bg-white/80 p-6 shadow-soft">
    <h3 className="text-lg font-semibold text-text-dark">{title}</h3>
    <div className="text-sm text-text-muted">{children}</div>
  </section>
);

const ExercisePage = () => {
  const { exerciseId } = useParams();
  const { exercise, equipment } = useExercise(exerciseId);

  const muscleList = useMemo(() => exercise?.muscles ?? [], [exercise]);

  if (!exercise) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="space-y-8">
      <BackButton to={equipment ? `/equipamentos/${equipment.id}` : '/'} />
      <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
        <VideoPlayer video={exercise.video} title={exercise.title} />
        <div className="flex flex-col gap-6">
          <section className="glass-panel space-y-4 p-6">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-coral">
                {equipment?.name}
              </p>
              <h1 className="text-3xl font-semibold text-text-dark">{exercise.title}</h1>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {exercise.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
              {exercise.level ? <Tag>Nível {exercise.level}</Tag> : null}
              {exercise.duration ? <Tag>{exercise.duration} min</Tag> : null}
            </div>
          </section>
          <Section title="Para que serve">{exercise.summary}</Section>
          <Section title="Grupo muscular trabalhado">
            <ul className="grid gap-2 text-sm font-medium text-text-dark">
              {muscleList.map((muscle) => (
                <li
                  key={muscle}
                  className="flex items-center gap-3 rounded-full bg-rose/60 px-4 py-2 text-text-dark"
                >
                  <span className="flex h-2 w-2 shrink-0 rounded-full bg-coral" />
                  {muscle}
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
      {exercise.variations?.length ? (
        <Section title="Variações sugeridas">
          <ul className="list-disc space-y-2 pl-5">
            {exercise.variations.map((variation) => (
              <li key={variation}>{variation}</li>
            ))}
          </ul>
        </Section>
      ) : null}
      {exercise.contraindications?.length ? (
        <Section title="Contraindicações">
          <ul className="list-disc space-y-2 pl-5 text-sm text-text-muted">
            {exercise.contraindications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      ) : null}
      {exercise.equipmentNeeds?.length ? (
        <Section title="Equipamentos e acessórios">
          <ul className="list-disc space-y-2 pl-5 text-sm text-text-muted">
            {exercise.equipmentNeeds.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      ) : null}
    </div>
  );
};

export default ExercisePage;

