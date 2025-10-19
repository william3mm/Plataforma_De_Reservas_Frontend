import React from "react";

import "./Dashboard_Card.css";
interface DashboardCardProps {
  onCreate: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onGetServices?: () => void;
  onGetHistory?: () => void;
}

export default function DashboardCard({
  onCreate,

  onGetServices,
  onGetHistory,
}: DashboardCardProps) {
  return (
    <div className="dashboard-card">
      <h2>Gerenciar Serviços</h2>
      <div className="dashboard-card__buttons">
        <button onClick={onCreate}>Criar Novo Serviço</button>
        <button onClick={onGetServices}> Listar Serviços</button>
        <button onClick={onGetHistory}> Histórico</button>
      </div>
    </div>
  );
}
