import { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import BackButton from '../components/BackButton.jsx';
import ExerciseCard from '../components/ExerciseCard.jsx';
import SearchBar from '../components/SearchBar.jsx';
import Tag from '../components/Tag.jsx';
import { useEquipment, useExerciseSearch } from '../features/exercises/hooks.js';

const EquipmentHeader = ({ equipment }) => (
  <div className="space-y-4">
    <BackButton to="/" />
    <div className="space-y-3">
      <h1 className="text-3xl font-semibold text-text-dark">{equipment.name}</h1>
      <p className="text-sm text-text-muted">{equipment.description}</p>
    </div>
    <div className="flex flex-wrap gap-2">
      {equipment.tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  </div>
);

const EquipmentPage = () => {
  const { equipmentId } = useParams();
  const { equipment } = useEquipment(equipmentId);
  const { filters, results, setQuery } = useExerciseSearch({ equipmentId });

  const summary = useMemo(() => {
    if (!equipment) return '';
    return `${results.length} exercício${results.length === 1 ? '' : 's'} disponíveis`;
  }, [equipment, results.length]);

  if (!equipment) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="space-y-8">
      <EquipmentHeader equipment={equipment} />
      <div className="grid gap-4 sm:grid-cols-[1fr_autofit] sm:items-center">
        <SearchBar value={filters.query} onChange={setQuery} />
        <span className="text-xs text-text-muted sm:text-right">{summary}</span>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {results.length ? (
          results.map((exercise) => <ExerciseCard key={exercise.id} exercise={exercise} />)
        ) : (
          <div className="col-span-full rounded-3xl bg-white/80 p-10 text-center text-text-muted shadow-soft">
            <p className="text-base font-medium text-text-dark">
              Nenhum exercício encontrado para &quot;{filters.query}&quot;
            </p>
            <p className="mt-2 text-sm">
              Tente palavras-chave diferentes ou explore outro equipamento.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EquipmentPage;

