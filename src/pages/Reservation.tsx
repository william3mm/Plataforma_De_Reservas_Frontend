import { useEffect, useState } from "react";
import api from "../api/axios";
import { Reservation } from "../types/Reservation";

export default function Reservations() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function fetchReservations() {
      try {
        const token = await localStorage.getItem("token"); // depois vamos trocar por AsyncStorage
        const res = await api.get("/reservations", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setReservations(res.data.data);
      } catch (error) {
        console.error("Erro ao buscar reservas:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchReservations();
  }, []);

  if (loading) return <p>Carregando...</p>;

  if (reservations.length === 0) return <p>Nenhuma transação encontrada</p>;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {reservations.map((r) => (
        <div key={r.id}>
          <p>
            <strong>Cliente:</strong> {r.cliente.nome} ({r.cliente.email})
          </p>
          <p>
            <strong>Serviço:</strong> {r.servico.nome} - {r.valor} Kz
          </p>
          <p>
            <strong>Prestador:</strong> {r.servico.prestador.nome} (
            {r.servico.prestador.email})
          </p>
          <p>
            <strong>Status:</strong> {r.status}
          </p>
        </div>
      ))}
    </div>
  );
}
