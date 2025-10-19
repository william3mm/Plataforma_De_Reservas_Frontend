// import { useState } from "react";
// import api from "../api/axios";

// export default function Register() {
//   const [nome, setNome] = useState("");
//   const [email, setEmail] = useState("");
//   const [nif, setNif] = useState("");
//   const [senha, setSenha] = useState("");
//   const [tipo, setTipo] = useState<"CLIENTE" | "PRESTADOR">("CLIENTE");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await api.post("/register", { nome, email, nif, senha, tipo });
//       alert("Usuário criado com sucesso!");
//     } catch (err: any) {
//       alert(err.response?.data?.message || "Erro ao registrar usuário");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         value={nome}
//         onChange={(e) => setNome(e.target.value)}
//         placeholder="Nome"
//       />
//       <input
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         value={nif}
//         onChange={(e) => setNif(e.target.value)}
//         placeholder="NIF"
//       />
//       <input
//         type="password"
//         value={senha}
//         onChange={(e) => setSenha(e.target.value)}
//         placeholder="Senha"
//       />
//       <select value={tipo} onChange={(e) => setTipo(e.target.value as any)}>
//         <option value="CLIENTE">Cliente</option>
//         <option value="PRESTADOR">Prestador</option>
//       </select>
//       <button type="submit">Registrar</button>
//     </form>
//   );
// }
