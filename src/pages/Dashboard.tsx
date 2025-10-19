import { useEffect, useState } from "react";
import api from "../api/axios";
import DashboardCard from "../components/Dashboard/Card/Dashboard_Card";
import "./Dashboard.css";
import type Service from "../types/Service";
import handleDelete from "../utils/Dashboard/handle_Delete";
import handleEdit from "../utils/Dashboard/handle_Edit";
import handleGetHistory from "../utils/Dashboard/handle_Get_History";

export default function Dashboard() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;

    async function fetchServices() {
      try {
        const res = await api.get("/services/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setServices(res.data.services);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, [token]);

  if (loading) return <p>Carregando serviços...</p>;

  // Função para abrir modal de edição e chamar handleEdit
  const handleEditService = (service: Service) => {
    const nome = prompt("Novo nome do serviço:", service.nome);
    const preco = prompt("Novo preço do serviço:", String(service.preco));

    if (nome && preco) {
      handleEdit(service.id, { nome, preco: Number(preco) }, setServices);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-card-wrapper">
        <DashboardCard
          onCreate={() => alert("Abrir modal de criação")} // futuramente abrir modal
          onGetHistory={() => handleGetHistory(setServices)}
        />
      </div>

      <div className="dashboard-services">
        {services.map((s) => (
          <div key={s.id} className="dashboard-service-item">
            <p>
              <strong>{s.nome}</strong> - {s.preco} Kz
            </p>
            <div>
              <button onClick={() => handleEditService(s)}>Editar</button>
              <button onClick={() => handleDelete(s.id, setServices)}>
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
