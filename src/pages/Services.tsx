import { useEffect, useState } from "react";
import api from "../api/axios";
import type Service from "../types/Service";
import { useNavigate } from "react-router-dom";
import type { UserType } from "../types/User";
import { contratarServico } from "../Services/Reservation_Service";
import { HireService } from "../Services/Hire_Service";

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [saldo, setSaldo] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [tipo, setTipo] = useState<string>("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      console.log("Token inválido, faça login novamente");
      navigate("/");
      return;
    }

    async function fetchServices() {
      try {
        const resUser = await api.get("/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        // we check to see if the user is of the type "cliente"

        const user = resUser.data;

        const userTipo: UserType = user.tipo;

        setTipo(userTipo);
        if (userTipo !== "CLIENTE") {
          alert("Acesso permitido apenas para clientes");
          navigate("/");
          return;
        }
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
  }, [navigate]);

  const handleHire = async (serviceId: number, preco: number) => {
    if (saldo < preco) {
      alert("Saldo insuficiente");
      return;
    }

    try {
      const novoSaldo = await HireService(serviceId, preco, saldo, token);
      setSaldo(novoSaldo);

      await contratarServico(serviceId, token);

      alert("Serviço contratado com sucesso");
      setSaldo((prev) => prev - preco); //we set to the current balance
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
