import api from "../api/axios";

export async function contratarServico(serviceId: number, token: string) {
  const res = await api.post(
    "/reservations",
    { servicoId: serviceId },
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return res.data;
}
