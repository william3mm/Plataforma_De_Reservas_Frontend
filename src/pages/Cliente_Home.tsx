// src/pages/ClienteHome.tsx
import { useEffect, useState } from "react";
import api from "../api/axios";
import type Service from "../types/Service";
import { useNavigate } from "react-router-dom";
import { contratarServico } from "../Services/Reservation_Service";
import { HireService } from "../Services/Hire_Service";
import ServicesGrid from "../components/Services_Grid";
import "./Cliente_Home.css";
export default function ClienteHome() {
  const [services, setServices] = useState<Service[]>([]);
  const [saldo, setSaldo] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    async function fetchData() {
      try {
        const resUser = await api.get("/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSaldo(resUser.data.saldo);

        const resServices = await api.get("/services", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setServices(resServices.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [navigate]);

  const handleHire = async (serviceId: number, preco: number) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    if (saldo < preco) {
      alert("Saldo insuficiente");
      return;
    }

    try {
      const novoSaldo = await HireService(serviceId, preco, saldo, token);
      setSaldo(novoSaldo);

      await contratarServico(serviceId, token);
      alert("Serviço contratado com sucesso!");
    } catch (error: any) {
      console.error(error);
      alert("Erro ao contratar serviço.");
    }
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="cliente-home">
      <h1 style={{ textAlign: "center", color: "white" }}>
        Serviços Disponíveis
      </h1>
      <ServicesGrid services={services} onHire={handleHire} saldo={saldo} />
    </div>
  );
}
