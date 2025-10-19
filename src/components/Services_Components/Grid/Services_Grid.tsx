import Card from "../Card/Services_Card";
import type Service from "../../../types/Service";
import "./Services_Grid.css";

interface ServicesGridProps {
  services: Service[];
  onHire: (serviceId: number, preco: number) => void;
  saldo: number;
}

export default function ServicesGrid({ services, onHire }: ServicesGridProps) {
  return (
    <div className="services-grid">
      {services.map((s) => (
        <Card key={s.id}>
          <h3>{s.nome}</h3>
          <p>{s.descricao}</p>
          <p>
            <strong>Preço:</strong> {s.preco.toFixed(2)} kz
          </p>
          <button onClick={() => onHire(s.id, s.preco)}>Contratar</button>
        </Card>
      ))}
    </div>
  );
}
