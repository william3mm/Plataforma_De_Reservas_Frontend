import { useEffect, useState } from "react";
import api from "../api/axios";
import type Service from "../types/Service";

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [saldo, setSaldo] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.log("Sem token");
        }
        const resUser = await api.get("/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSaldo(resUser.data.saldo);

        const res = await api.get("/services", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setServices(res.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  }, []);

  const handleHire = async (serviceId: number, preco: number) => {
    if (saldo < preco) {
      alert("Saldo insuficiente");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const res = await api.post(
        "/reservations",
        { servicoId: serviceId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Serviço contratado com sucesso");
      setSaldo((prev) => prev - preco); //we set to the current balance
    } catch (error: any) {
      console.error(error.response?.data || error.message);
      alert(error.response?.data?.message || "Erro ao contratar serviço");
    }
  };
  if (loading) return <p>Carregando...</p>;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {services.map((s) => (
        <div
          key={s.id}
          style={{
            border: "1px solid #ccc",
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
