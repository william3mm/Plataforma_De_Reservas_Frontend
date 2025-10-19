export type ReservationStatus = "PENDENTE" | "CONFIRMADA" | "CANCELADA";

export interface Reservation {
  id: number;
  clienteId: number;
  servicoId: number;
  valor: number;
  status: ReservationStatus;
  createdAt: string;
  updatedAt: string;

  cliente: {
    id: number;
    nome: string;
    email: string;
  };

  servico: {
    id: number;
    nome: string;
    preco: number;
    prestador: {
      id: number;
      nome: string;
      email: string;
    };
  };
}
