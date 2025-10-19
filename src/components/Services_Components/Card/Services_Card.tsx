import React, { ReactNode } from "react";
import "./Services_Card.css";

interface CardProps {
  children: ReactNode;
}

export default function ServicesCard({ children }: CardProps) {
  return <div className="services-card">{children}</div>;
}
