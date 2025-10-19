import { useEffect, useState } from "react";
import api from "../api/axios";
//import Navbar from "../components/Navbar";
import DashboardCard from "../components/Dashboard_Card";
import "./Dashboard.css";
import type Service from "../types/Service";
import handleDelete from "../utils/Dashboard/handleDelete";
import handleEdit from "../utils/Dashboard/handleEdit";

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

  return (
    <div className="dashboard">
      <div className="dashboard-card-wrapper">
        <DashboardCard
          onCreate={() => alert("Abrir modal de criação")}
          onGetServices={() => alert("Listar serviços")}
          onGetHistory={() => alert("Abrir histórico")}
        />
      </div>

      <div className="dashboard-services">
        {services.map((s) => (
          <div key={s.id} className="dashboard-service-item">
            <p>
              <strong>{s.nome}</strong> - {s.preco} Kz
            </p>
            <div>
              <button onClick={() => handleEdit(s.id)}>Editar</button>
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
