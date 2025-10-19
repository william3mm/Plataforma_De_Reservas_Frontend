// src/Services/ServiceActions.ts
import api from "../../api/axios";
import type { Dispatch, SetStateAction } from "react";
import type Service from "../../types/Service";

export default async function handleDelete(
  serviceId: number,
  setServices: Dispatch<SetStateAction<Service[]>>
) {
  const confirm = window.confirm(
    "Tem certeza que deseja excluir este serviço?"
  );
  if (!confirm) return;

  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    await api.delete(`/services/${serviceId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setServices((prev) => prev.filter((s) => s.id !== serviceId));
    alert("Serviço excluído com sucesso!");
  } catch (err) {
    console.error(err);
    alert("Erro ao excluir serviço.");
  }
}
