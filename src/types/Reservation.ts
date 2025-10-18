export type ReservationStatus = "PENDENTE" | "CONFIRMADA" | "CANCELADA";

export interface Reservation {
  id: number;
  clienteId: number;
  servicoId: number;
  valor: number;
  status: ReservationStatus;
  createdAt: string;
}
