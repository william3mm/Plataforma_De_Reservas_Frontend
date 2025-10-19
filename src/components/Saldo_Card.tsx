// src/components/SaldoCard.tsx
import React from "react";

interface SaldoCardProps {
  saldo: number;
}

export default function SaldoCard({ saldo }: SaldoCardProps) {
  return (
    <div className="saldo‐card">
      <div className="saldo‐card__header">
        <h2>Seu Saldo</h2>
      </div>
      <div className="saldo‐card__body">
        <span className="saldo‐card__amount">KZ {saldo.toFixed(2)}</span>
      </div>
    </div>
  );
}
