import api from "../../api/axios";
import type Service from "../../types/Service";
import type { Dispatch, SetStateAction } from "react";

export default async function handleGetHistory(
  setServices: Dispatch<SetStateAction<Service[]>>
) {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    const res = await api.get("/services/", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setServices(res.data.data);
  } catch (error) {
    console.error(error);
    alert("Erro ao listar serviços.");
  }
}
