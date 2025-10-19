// src/pages/ClienteHome.tsx
import { useEffect, useState } from "react";
import api from "../api/axios";
import "./Cliente_Home.css";
import "../components/Saldo/Saldo_Card.css";
import type Service from "../types/Service";
import { useNavigate } from "react-router-dom";
import { contratarServico } from "../Services/Reservation_Service";
import { HireService } from "../Services/Hire_Service";
import ServicesGrid from "../components/Services_Components/Grid/Services_Grid";
import SaldoCard from "../components/Saldo/Saldo_Card";
import Navbar from "../components/Nav/Navbar";

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
        const user = resUser.data.user;
        setSaldo(user.saldo);

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
    console.log("estou aqui");
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
      <Navbar />
      <h1 style={{ textAlign: "center", color: "white" }}>
        Serviços Disponíveis
      </h1>
      <SaldoCard saldo={saldo} />
      <ServicesGrid services={services} onHire={handleHire} saldo={saldo} />
    </div>
  );
}
