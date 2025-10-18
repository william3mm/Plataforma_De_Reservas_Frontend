export type UserType = "CLIENTE" | "PRESTADOR";

export interface User {
  id: number;
  nome: string;
  email: string;
  nif: string;
  tipo: UserType;
  saldo: number;
}
