// src/components/ReservationsGrid.tsx
import React from "react";
import type { Reservation } from "../../../types/Reservation";
import ReservationCard from "../Card/Reservation_Card";
import "./Reservation_Grid.css";

interface Props {
  reservations: Reservation[];
}

export default function ReservationsGrid({ reservations }: Props) {
  return (
    <div className="reservations-grid">
      {reservations.map((r) => (
        <ReservationCard key={r.id} reservation={r} />
      ))}
    </div>
  );
}
