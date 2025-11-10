export const equipments = [
  {
    id: 'cadillac',
    name: 'Cadillac',
    description:
      'Versátil para desenvolver força, mobilidade e controle com suportes e molas ajustáveis.',
    heroImage:
      'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1200&q=80',
    tags: ['controle', 'força', 'estabilidade'],
    level: ['iniciante', 'intermediário', 'avançado'],
  },
  {
    id: 'reformer',
    name: 'Reformer',
    description:
      'Equipamento clássico para treinos completos, oferecendo feedback preciso através do carrinho e molas.',
    heroImage:
      'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1200&q=80',
    tags: ['potência', 'mobilidade'],
    level: ['iniciante', 'intermediário', 'avançado'],
  },
  {
    id: 'step-chair',
    name: 'Step Chair',
    description:
      'Ideal para treinos desafiadores de estabilidade e força unilateral com foco em coordenação.',
    heroImage:
      'https://images.unsplash.com/photo-1594737625785-c66858a38a6f?auto=format&fit=crop&w=1200&q=80',
    tags: ['estabilidade', 'mobilidade'],
    level: ['intermediário', 'avançado'],
  },
  {
    id: 'magic-circle',
    name: 'Magic Circle',
    description:
      'Acessório portátil para ativações precisas de membros superiores e inferiores, ideal para aulas coletivas.',
    heroImage:
      'https://images.unsplash.com/photo-1599058937451-1cac5d4b8268?auto=format&fit=crop&w=1200&q=80',
    tags: ['ativação', 'controle'],
    level: ['iniciante', 'intermediário'],
  },
  {
    id: 'bola',
    name: 'Bola',
    description:
      'Ferramenta versátil para estabilidade, alongamento e fortalecimento com suporte dinâmico.',
    heroImage:
      'https://images.unsplash.com/photo-1617364852228-5d937579f1b4?auto=format&fit=crop&w=1200&q=80',
    tags: ['equilíbrio', 'mobilidade'],
    level: ['iniciante', 'intermediário'],
  },
  {
    id: 'faixa-elastica',
    name: 'Faixa Elástica',
    description:
      'Resistência ajustável que amplia possibilidades de progressão e regressão em exercícios.',
    heroImage:
      'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=1200&q=80',
    tags: ['força', 'resistência'],
    level: ['iniciante', 'intermediário', 'avançado'],
  },
];

const buildExercise = ({
  id,
  equipmentId,
  title,
  summary,
  muscles,
  tags,
  video,
  focus,
  level,
  duration,
  contraindications = [],
  variations = [],
  equipmentNeeds = [],
}) => ({
  id,
  equipmentId,
  title,
  summary,
  muscles,
  tags,
  video,
  focus,
  level,
  duration,
  contraindications,
  variations,
  equipmentNeeds,
  createdAt: '2024-01-01T00:00:00.000Z',
  updatedAt: '2024-10-10T00:00:00.000Z',
});

export const exercises = [
  buildExercise({
    id: 'cadillac-leg-springs-series',
    equipmentId: 'cadillac',
    title: 'Leg Springs Series',
    summary:
      'Sequência completa para mobilidade de quadril, força de core e alinhamento axial com molas longas.',
    muscles: ['Core profundo', 'Quadríceps', 'Glúteos', 'Flexores de quadril'],
    tags: ['mobilidade', 'força', 'cadillac'],
    focus: 'controle',
    level: 'intermediário',
    duration: 12,
    video: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/zndg1zSOi6c',
      thumb: 'https://img.youtube.com/vi/zndg1zSOi6c/hqdefault.jpg',
    },
    equipmentNeeds: ['Molas longas', 'Alças de tornozelo'],
    variations: ['Leg Springs com círculo externo', 'Leg Springs com faixas'],
  }),
  buildExercise({
    id: 'cadillac-roll-down-bar',
    equipmentId: 'cadillac',
    title: 'Roll Down Bar Control',
    summary:
      'Foco em mobilidade de coluna e fortalecimento de cintura escapular com feedback do rolo.',
    muscles: ['Paravertebrais', 'Abdominais', 'Latíssimo do dorso', 'Deltóides'],
    tags: ['mobilidade', 'coluna', 'cadillac'],
    focus: 'mobilidade',
    level: 'iniciante',
    duration: 8,
    video: {
      type: 'youtube',
      url: 'https://www.youtube.com/embed/aTE_nrAyC5s',
      thumb: 'https://img.youtube.com/vi/aTE_nrAyC5s/hqdefault.jpg',
    },
    equipmentNeeds: ['Barra tower', 'Molas médias'],
    contraindications: ['Hérnia discal aguda', 'Osteoporose avançada'],
  }),
  buildExercise({
    id: 'cadillac-tower-push-through',
    equipmentId: 'cadillac',
    title: 'Tower Push Through',
    summary:
      'Sequência de flexão e extensão axial para melhorar alongamento posterior e controle de core.',
    muscles: ['Isquiotibiais', 'Eretores da espinha', 'Abdominais'],
    tags: ['torre', 'mobilidade', 'cadillac'],
    focus: 'flexibilidade',
    level: 'intermediário',
    duration: 10,
    video: {
      type: 'placeholder',
      thumb: null,
      url: null,
      note: 'Gravação em andamento com instrutora convidada.',
    },
    variations: ['Tower articulada', 'Tower com adução de braços'],
  }),
  buildExercise({
    id: 'cadillac-hanging-pull-ups',
    equipmentId: 'cadillac',
    title: 'Hanging Pull-Ups Controlado',
    summary:
      'Treino avançado de força upper body com ativação intensa de core e ritmo respiratório.',
    muscles: ['Latíssimo do dorso', 'Bíceps', 'Core global', 'Glúteos'],
    tags: ['força', 'suspensão', 'cadillac'],
    focus: 'força',
    level: 'avançado',
    duration: 14,
    video: {
      type: 'placeholder',
      thumb: null,
      url: null,
      note: 'Sessão será filmada com câmera 4K para melhor demonstração.',
    },
    contraindications: ['Lesões de ombro agudas'],
  }),
  buildExercise({
    id: 'reformer-coordination-flow',
    equipmentId: 'reformer',
    title: 'Coordination Flow',
    summary:
      'Integração de respiração, coordenação de braços e pernas em ritmo fluido no Reformer.',
    muscles: ['Core profundo', 'Deltóides', 'Adutores', 'Glúteos'],
    tags: ['coordenação', 'força', 'reformer'],
    focus: 'estabilidade',
    level: 'intermediário',
    duration: 11,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1583454110551-21f2fa2f7dd0?auto=format&fit=crop&w=900&q=80',
    },
    equipmentNeeds: ['Molas leves', 'Alças de mão'],
  }),
  buildExercise({
    id: 'reformer-short-box-twist',
    equipmentId: 'reformer',
    title: 'Short Box Twist Precision',
    summary:
      'Trabalho de flexão lateral com ênfase em alinhamento de cintura escapular e estabilidade pélvica.',
    muscles: ['Oblíquos', 'Quadrado lombar', 'Multífidos'],
    tags: ['coluna', 'mobilidade', 'reformer'],
    focus: 'mobilidade',
    level: 'intermediário',
    duration: 9,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80',
    },
    variations: ['Short Box Twist com bastão'],
  }),
  buildExercise({
    id: 'reformer-jumpboard-power',
    equipmentId: 'reformer',
    title: 'Jumpboard Power Series',
    summary:
      'Sequência cardiovascular de baixo impacto combinando pliometria controlada e estabilidade lombo-pélvica.',
    muscles: ['Quadríceps', 'Glúteos', 'Panturrilhas', 'Core'],
    tags: ['cardio', 'potência', 'reformer'],
    focus: 'resistência',
    level: 'avançado',
    duration: 15,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1546484959-f9a94b0f865e?auto=format&fit=crop&w=900&q=80',
    },
    contraindications: ['Gravidez avançada', 'Lesões de joelho'],
  }),
  buildExercise({
    id: 'reformer-long-stretch-reach',
    equipmentId: 'reformer',
    title: 'Long Stretch Reach',
    summary:
      'Sequência focada em estabilidade de ombros e força de core em cadeia anterior estendida.',
    muscles: ['Peitoral', 'Tríceps', 'Core anterior', 'Glúteos'],
    tags: ['força', 'estabilidade', 'reformer'],
    focus: 'força',
    level: 'avançado',
    duration: 10,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=80',
    },
  }),
  buildExercise({
    id: 'step-chair-mountain-climb',
    equipmentId: 'step-chair',
    title: 'Mountain Climb Chair',
    summary:
      'Escalada controlada na chair para trabalhar força unilateral e coordenação de membros inferiores.',
    muscles: ['Quadríceps', 'Glúteos', 'Core global', 'Panturrilhas'],
    tags: ['força', 'coordenação', 'chair'],
    focus: 'resistência',
    level: 'intermediário',
    duration: 12,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=900&q=80',
    },
    equipmentNeeds: ['Molas médias', 'Alças laterais'],
  }),
  buildExercise({
    id: 'step-chair-single-leg-pump',
    equipmentId: 'step-chair',
    title: 'Single Leg Pump Control',
    summary:
      'Trabalho unilateral para estabilidade pélvica e força excêntrica dos membros inferiores.',
    muscles: ['Quadríceps', 'Isquiotibiais', 'Glúteos', 'Core'],
    tags: ['estabilidade', 'força', 'chair'],
    focus: 'estabilidade',
    level: 'intermediário',
    duration: 8,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80',
    },
  }),
  buildExercise({
    id: 'step-chair-spine-twist-lift',
    equipmentId: 'step-chair',
    title: 'Spine Twist Lift',
    summary:
      'Integração de rotação torácica com extensão axial para melhorar mobilidade segmentar.',
    muscles: ['Oblíquos', 'Multífidos', 'Deltóides posteriores'],
    tags: ['mobilidade', 'coluna', 'chair'],
    focus: 'mobilidade',
    level: 'intermediário',
    duration: 9,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=900&q=80',
    },
  }),
  buildExercise({
    id: 'step-chair-hamstring-press',
    equipmentId: 'step-chair',
    title: 'Hamstring Press Balance',
    summary:
      'Sequência com apoio único para força de posteriores e equilíbrio dinâmico.',
    muscles: ['Isquiotibiais', 'Glúteos', 'Core estabilizador'],
    tags: ['equilíbrio', 'força', 'chair'],
    focus: 'estabilidade',
    level: 'avançado',
    duration: 10,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1549060278-7e168fcee0c2?auto=format&fit=crop&w=900&q=80',
    },
    contraindications: ['Tendinopatia proximal ativa'],
  }),
  buildExercise({
    id: 'magic-circle-inner-thigh-pulse',
    equipmentId: 'magic-circle',
    title: 'Inner Thigh Pulse Series',
    summary:
      'Ativações rápidas de adutores com foco em resistência muscular localizada e controle respiratório.',
    muscles: ['Adutores', 'Core', 'Glúteos'],
    tags: ['ativação', 'força', 'magic circle'],
    focus: 'resistência',
    level: 'iniciante',
    duration: 7,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1576487248805-1e6edc9086cd?auto=format&fit=crop&w=900&q=80',
    },
  }),
  buildExercise({
    id: 'magic-circle-standing-arm-arc',
    equipmentId: 'magic-circle',
    title: 'Standing Arm Arc',
    summary:
      'Sequência em pé para estabilidade escapular e integração de cadeia cruzada superior.',
    muscles: ['Deltoides', 'Serrátil anterior', 'Core'],
    tags: ['estabilidade', 'força', 'magic circle'],
    focus: 'controle',
    level: 'intermediário',
    duration: 8,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=900&q=80',
    },
  }),
  buildExercise({
    id: 'magic-circle-core-halo',
    equipmentId: 'magic-circle',
    title: 'Core Halo Rotation',
    summary:
      'Desafio de rotação controlada para fortalecer cintura escapular e oblíquos.',
    muscles: ['Oblíquos', 'Deltoides', 'Transverso do abdome'],
    tags: ['controle', 'core', 'magic circle'],
    focus: 'estabilidade',
    level: 'intermediário',
    duration: 9,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1518609581096-a985d5f2ef83?auto=format&fit=crop&w=900&q=80',
    },
  }),
  buildExercise({
    id: 'magic-circle-bridge-squeeze',
    equipmentId: 'magic-circle',
    title: 'Bridge Squeeze Challenge',
    summary:
      'Ponte ativa com compressão no círculo para recrutar cadeia posterior e estabilizadores de quadril.',
    muscles: ['Glúteos', 'Isquiotibiais', 'Core'],
    tags: ['força', 'estabilidade', 'magic circle'],
    focus: 'força',
    level: 'iniciante',
    duration: 10,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=900&q=80',
    },
  }),
  buildExercise({
    id: 'bola-swiss-pike-extension',
    equipmentId: 'bola',
    title: 'Swiss Ball Pike Extension',
    summary:
      'Desafio para estabilidade de ombros e mobilidade de cadeia posterior com alavanca longa.',
    muscles: ['Core global', 'Deltóides', 'Isquiotibiais'],
    tags: ['força', 'mobilidade', 'bola'],
    focus: 'força',
    level: 'avançado',
    duration: 12,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=900&q=80',
    },
    contraindications: ['Instabilidade de ombro'],
  }),
  buildExercise({
    id: 'bola-prancha-passada',
    equipmentId: 'bola',
    title: 'Prancha com Passada',
    summary:
      'Trabalho de prancha dinâmica com transferência de peso e feedback proprioceptivo.',
    muscles: ['Core anterior', 'Shoulder stabilizers', 'Glúteos'],
    tags: ['estabilidade', 'propriocepção', 'bola'],
    focus: 'controle',
    level: 'intermediário',
    duration: 8,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1584467735815-f778f274e434?auto=format&fit=crop&w=900&q=80',
    },
  }),
  buildExercise({
    id: 'bola-mobilidade-toracica',
    equipmentId: 'bola',
    title: 'Mobilidade Torácica na Bola',
    summary:
      'Sequência restaurativa para extensão torácica e abertura de peitoral com suporte da bola.',
    muscles: ['Peitoral maior', 'Paravertebrais torácicos', 'Abdominais'],
    tags: ['mobilidade', 'recuperação', 'bola'],
    focus: 'mobilidade',
    level: 'iniciante',
    duration: 7,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80',
    },
  }),
  buildExercise({
    id: 'bola-abdominal-roll-out',
    equipmentId: 'bola',
    title: 'Abdominal Roll-Out Assistido',
    summary:
      'Variação segura de roll-out para fortalecimento de core com progressão controlada.',
    muscles: ['Transverso do abdome', 'Reto abdominal', 'Deltóides'],
    tags: ['força', 'core', 'bola'],
    focus: 'força',
    level: 'iniciante',
    duration: 6,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80',
    },
    equipmentNeeds: ['Bola suíça 65cm'],
  }),
  buildExercise({
    id: 'faixa-elastica-row-flow',
    equipmentId: 'faixa-elastica',
    title: 'Elastic Row Flow',
    summary:
      'Sequência fluida de remadas combinando rotação torácica e reforço de postura.',
    muscles: ['Dorsais', 'Bíceps', 'Oblíquos', 'Core'],
    tags: ['força', 'postura', 'faixa'],
    focus: 'força',
    level: 'iniciante',
    duration: 8,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=900&q=80',
    },
  }),
  buildExercise({
    id: 'faixa-elastica-lateral-walk',
    equipmentId: 'faixa-elastica',
    title: 'Lateral Walk Resistance',
    summary:
      'Marcha lateral com faixa para ativar abdutores de quadril e estabilidade pélvica.',
    muscles: ['Glúteo médio', 'Glúteo mínimo', 'Core lateral'],
    tags: ['estabilidade', 'força', 'faixa'],
    focus: 'resistência',
    level: 'intermediário',
    duration: 7,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=900&q=80',
    },
  }),
  buildExercise({
    id: 'faixa-elastica-standing-chest',
    equipmentId: 'faixa-elastica',
    title: 'Standing Chest Expansion',
    summary:
      'Abertura de peito com ênfase em postura e ativação de extensores torácicos.',
    muscles: ['Peitoral', 'Deltoides posteriores', 'Trapézio médio'],
    tags: ['postura', 'força', 'faixa'],
    focus: 'controle',
    level: 'iniciante',
    duration: 6,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1594737625785-c66858a38a6c?auto=format&fit=crop&w=900&q=80',
    },
  }),
  buildExercise({
    id: 'faixa-elastica-glute-bridge-pulse',
    equipmentId: 'faixa-elastica',
    title: 'Glute Bridge Band Pulse',
    summary:
      'Ponte com abdução em faixa para reforço de cadeia posterior e estabilidade de joelhos.',
    muscles: ['Glúteos', 'Isquiotibiais', 'Abdutores de quadril'],
    tags: ['força', 'estabilidade', 'faixa'],
    focus: 'força',
    level: 'iniciante',
    duration: 9,
    video: {
      type: 'placeholder',
      thumb: 'https://images.unsplash.com/photo-1579758629936-03510845afc7?auto=format&fit=crop&w=900&q=80',
    },
    variations: ['Bridge com extensão alternada de pernas'],
  }),
];

export const equipmentMap = new Map(equipments.map((equipment) => [equipment.id, equipment]));
export const exerciseMap = new Map(exercises.map((exercise) => [exercise.id, exercise]));

export const getEquipments = () => equipments;
export const getEquipmentById = (id) => equipmentMap.get(id);
export const getExercises = () => exercises;
export const getExercisesByEquipment = (equipmentId) =>
  exercises.filter((exercise) => exercise.equipmentId === equipmentId);
export const getExerciseById = (exerciseId) => exerciseMap.get(exerciseId);

const normalize = (value = '') =>
  value
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

export const filterExercises = (items, filters) => {
  const { query = '', levels = [], muscles = [], duration = null } = filters;
  const normalizedQuery = normalize(query);

  return items.filter((item) => {
    const matchesQuery =
      !normalizedQuery ||
      normalize(item.title).includes(normalizedQuery) ||
      normalize(item.summary).includes(normalizedQuery) ||
      item.tags.some((tag) => normalize(tag).includes(normalizedQuery)) ||
      item.muscles.some((muscle) => normalize(muscle).includes(normalizedQuery));

    const matchesLevel =
      !levels.length || (item.level && levels.map(normalize).includes(normalize(item.level)));

    const matchesMuscles =
      !muscles.length ||
      muscles.every((muscle) => item.muscles.map(normalize).includes(normalize(muscle)));

    const matchesDuration =
      !duration ||
      (typeof duration === 'object' && duration?.min <= item.duration && item.duration <= duration?.max);

    return matchesQuery && matchesLevel && matchesMuscles && matchesDuration;
  });
};

