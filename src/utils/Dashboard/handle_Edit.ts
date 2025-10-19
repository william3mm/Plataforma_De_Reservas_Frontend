import type { Dispatch, SetStateAction } from "react";
import type Service from "../../types/Service";
import api from "../../api/axios";

interface EditServiceData {
  nome?: string;
  preco?: number;
  descricao?: string;
}

export default async function handleEdit(
  serviceId: number,
  data: EditServiceData,
  setServices: Dispatch<SetStateAction<Service[]>>
) {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    const res = await api.put(
      `/services/${serviceId}`,
      data, // aqui vai o body
      { headers: { Authorization: `Bearer ${token}` } }
    );

    // Atualiza a lista local de serviços
    setServices((prev) =>
      prev.map((s) => (s.id === serviceId ? res.data.service : s))
    );

    alert("Serviço atualizado com sucesso!");
  } catch (err) {
    console.error(err);
    alert("Erro ao atualizar serviço.");
  }
}
