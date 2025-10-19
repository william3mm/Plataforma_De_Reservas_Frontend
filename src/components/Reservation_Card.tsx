import React from "react";
import type { Reservation } from "../types/Reservation";
import "./Reservation_Card.css";

interface Props {
  reservation: Reservation;
}

export default function ReservationCard({ reservation }: Props) {
  return (
    <div className="reservation-card">
      <div className="reservation-card__header">
        <p>
          <strong>Cliente:</strong> {reservation.cliente.nome}
        </p>
        <p>
          <strong>Status:</strong> {reservation.status}
        </p>
      </div>
      <div className="reservation-card__body">
        <p>
          <strong>Serviço:</strong> {reservation.servico.nome} -{" "}
          {reservation.valor} Kz
        </p>
        <p>
          <strong>Prestador:</strong> {reservation.servico.prestador.nome} (
          {reservation.servico.prestador.email})
        </p>
      </div>
    </div>
  );
}
