import { useEffect, useState } from "react";
import api from "../api/axios";
import type Service from "../types/Service";
import { useNavigate } from "react-router-dom";
import { contratarServico } from "../Services/Reservation_Service";
import { HireService } from "../Services/Hire_Service";

interface ServicesProps {
  saldo: number;
  setSaldo: React.Dispatch<React.SetStateAction<number>>;
}

export default function Services({ saldo, setSaldo }: ServicesProps) {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchServices() {
      if (!token) {
        alert("Sessão expirada, faça login novamente");
        navigate("/");
        return;
      }

      try {
        const res = await api.get("/services", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setServices(res.data.services);
      } catch (error) {
        console.error("Erro ao carregar serviços", error);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, [navigate, token]);

  const handleHire = async (serviceId: number, preco: number) => {
    if (saldo < preco) {
      alert("Saldo insuficiente");
      return;
    }

    if (!token) {
      alert("Sessão expirada, faça login novamente");
      navigate("/");
      return;
    }

    try {
      const novoSaldo = await HireService(serviceId, preco, saldo, token);
      setSaldo(novoSaldo);

      await contratarServico(serviceId, token);

      alert("Serviço contratado com sucesso");
      setSaldo((prev) => prev - preco);
    } catch (error: any) {
      console.error(error.response?.data || error.message);
      alert(error.response?.data?.message || "Erro ao contratar serviço");
    }
  };

  if (loading) return <p>Carregando serviços...</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {services.map((s) => (
        <div
          key={s.id}
          style={{
            border: "1px solid #c91717ff",
            borderRadius: "8px",
            padding: "1rem",
            width: "250px",
          }}
        >
          <h3>{s.nome}</h3>
          <p>{s.descricao}</p>
          <p>Preço: {s.preco.toFixed(2)}</p>
          <button
            disabled={saldo < s.preco}
            onClick={() => handleHire(s.id, Number(s.preco))}
          >
            Contratar
          </button>
        </div>
      ))}
    </div>
  );
}
