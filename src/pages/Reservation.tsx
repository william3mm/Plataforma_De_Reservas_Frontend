import { useEffect, useState } from "react";
import api from "../api/axios";
import type { Reservation } from "../types/Reservation";
import ReservationsGrid from "../components/Reservation/Grid/Reservation_Grid";
import "../components/Reservation/Grid/Reservation_Grid.css";
import Navbar from "../components/Nav/Navbar";

export default function Reservations() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function fetchReservations() {
      try {
        const token = localStorage.getItem("token");
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
    <div className="cliente-home">
      <Navbar />
      <ReservationsGrid reservations={reservations} />;
    </div>
  );
}
