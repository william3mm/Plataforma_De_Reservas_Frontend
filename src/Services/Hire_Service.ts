import api from "../api/axios";

export async function HireService(
  serviceId: number,
  preco: number,
  saldo: number,
  token: string
): Promise<number> {
  if (saldo < preco) {
    throw new Error("Saldo insuficiente");
  }

  await api.post(
    "/reservations",
    { servicoId: serviceId },
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return saldo - preco;
}
