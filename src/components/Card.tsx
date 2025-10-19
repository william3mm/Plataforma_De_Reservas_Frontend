// src/components/Card.tsx
import React, { ReactNode } from "react";
import "./Card.css"; // vamos criar esse CSS

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}
