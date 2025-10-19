// src/pages/Dashboard.tsx
import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
//import "../components/"; // CSS específico da dashboard
import type Service from "../types/Service";

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
    <div>
      <Navbar />
      <h1>Gerenciar Serviços</h1>
      {services.map((s) => (
        <div
          key={s.id}
          style={{
            border: "1px solid #ccc",
            margin: "12px",
            padding: "12px",
            borderRadius: "12px",
          }}
        >
          <p>
            <strong>{s.nome}</strong> - {s.preco} Kz
          </p>
          <button>Editar</button>
          <button>Excluir</button>
        </div>
      ))}
      <button>Criar Novo Serviço</button>
    </div>
  );
}
