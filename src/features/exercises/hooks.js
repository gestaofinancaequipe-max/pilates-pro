import { useCallback, useMemo, useState } from 'react';
import {
  filterExercises,
  getExerciseById,
  getExercises,
  getExercisesByEquipment,
  getEquipmentById,
  getEquipments,
} from './data.js';

export const useEquipments = () => {
  const equipments = useMemo(() => getEquipments(), []);
  return { equipments };
};

export const useEquipment = (equipmentId) => {
  const equipment = useMemo(() => getEquipmentById(equipmentId), [equipmentId]);
  return { equipment };
};

export const useExercise = (exerciseId) => {
  const exercise = useMemo(() => getExerciseById(exerciseId), [exerciseId]);
  const equipment = useMemo(() => {
    if (!exercise) return null;
    return getEquipmentById(exercise.equipmentId);
  }, [exercise]);

  return { exercise, equipment };
};

const defaultFilterState = Object.freeze({
  query: '',
  levels: [],
  muscles: [],
  duration: null,
});

const mergeFilters = (prev, update) => ({
  ...prev,
  ...update,
});

export const useExerciseSearch = ({ equipmentId, initialFilters } = {}) => {
  const [filters, setFilters] = useState(() => ({
    ...defaultFilterState,
    ...initialFilters,
  }));

  const exercises = useMemo(() => {
    if (equipmentId) {
      return getExercisesByEquipment(equipmentId);
    }
    return getExercises();
  }, [equipmentId]);

  const results = useMemo(() => filterExercises(exercises, filters), [exercises, filters]);

  const setQuery = useCallback(
    (query) => setFilters((prev) => mergeFilters(prev, { query })),
    [],
  );

  const updateFilters = useCallback(
    (update) => setFilters((prev) => mergeFilters(prev, update)),
    [],
  );

  const resetFilters = useCallback(() => setFilters(defaultFilterState), []);

  return {
    filters,
    results,
    setQuery,
    updateFilters,
    resetFilters,
  };
};

