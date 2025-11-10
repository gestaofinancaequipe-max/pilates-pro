import HeroSection from '../components/HeroSection.jsx';
import EquipmentCard from '../components/EquipmentCard.jsx';
import Tag from '../components/Tag.jsx';
import { useEquipments } from '../features/exercises/hooks.js';

const HomePage = () => {
  const { equipments } = useEquipments();

  return (
    <div className="space-y-12">
      <HeroSection />
      <section className="space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-text-dark">Equipamentos em destaque</h2>
            <p className="text-sm text-text-muted">
              Selecione um equipamento para explorar exercícios detalhados, objetivos pedagógicos e
              progressões sugeridas.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <Tag>Escalável para novos módulos</Tag>
            <Tag>Conteúdo curado</Tag>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {equipments.map((equipment) => (
            <EquipmentCard key={equipment.id} equipment={equipment} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

