import Card from "../../Services_Components/Card/Services_Card";
import type Service from "../../../types/Service";
import "./Dashboard_Grid";

interface DashboardGridProps {
  services: Service[];
  onEdit: (service: Service) => void;
  onDelete: (serviceId: number) => void;
}

export default function DashboardGrid({
  services,
  onEdit,
  onDelete,
}: DashboardGridProps) {
  return (
    <div className="dashboards-grid">
      {services.map((s) => (
        <Card key={s.id}>
          <h3>{s.nome}</h3>
          <p>{s.descricao}</p>
          <p>
            <strong>Preço:</strong> {s.preco.toFixed(2)} Kz
          </p>
          <div className="card-buttons">
            <button onClick={() => onEdit(s)}>Editar</button>
            <button onClick={() => onDelete(s.id)}>Excluir</button>
          </div>
        </Card>
      ))}
    </div>
  );
}
