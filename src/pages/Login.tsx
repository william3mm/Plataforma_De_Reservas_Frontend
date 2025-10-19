// src/pages/Login.tsx
import React, { useState } from "react";
import Card from "../components/Card";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import type { UserType } from "../types/User";

export default function Login() {
  const [emailOrNif, setEmailOrNif] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", { emailOrNif, senha });
      const { token, tipo } = res.data as { token: string; tipo: UserType };

      // Salva token e tipo no localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("tipo", tipo);

      // Redireciona com base no tipo do usuário
      if (tipo === "CLIENTE") {
        navigate("/home/cliente");
      } else if (tipo === "PRESTADOR") {
        navigate("/dashboard");
      }
    } catch (err: any) {
      console.error("Erro login:", err);
      alert(err.response?.data?.message || "Falha ao autenticar");
    }
  };

  return (
    <div className="login-container">
      <Card>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email ou NIF"
            value={emailOrNif}
            onChange={(e) => setEmailOrNif(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
      </Card>
    </div>
  );
}
