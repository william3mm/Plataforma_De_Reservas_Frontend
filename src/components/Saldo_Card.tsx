import React from "react";
import "./Services_Card";

interface SaldoCardProps {
  saldo: number;
}

export default function SaldoCard({ saldo }: SaldoCardProps) {
  return (
    <div className="saldo-card">
      <div className="saldo-card__header">
        <h2>Saldo Atual</h2>
      </div>
      <div className="saldo-card__body">
        <p className="saldo-card__amount">
          {saldo.toLocaleString("pt-PT", {
            style: "currency",
            currency: "AOA",
          })}
        </p>
      </div>
    </div>
  );
}
