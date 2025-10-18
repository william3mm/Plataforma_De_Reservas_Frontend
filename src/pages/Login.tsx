// src/pages/Login.tsx
import React, { useState } from "react";
import Card from "../components/Card";
import "./Login.css"; // CSS da página
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Login() {
  const [emailOrNif, setemailOrNif] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { emailOrNif, senha });
      const token = res.data.token;

      // 1. Salvar token
      localStorage.setItem("token", token);

      // 2. Redirecionar para dashboard ou outra página
      navigate("/dashboard");

      // 3. (Opcional) Atualizar estado global se tiver um Context ou Redux
    } catch (err) {
      console.error("Erro login:", err);
      alert("Falha ao autenticar");
    }
  };

  return (
    <div className="login-container">
      <Card>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Ou Nif"
            value={emailOrNif}
            onChange={(e) => setemailOrNif(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </Card>
    </div>
  );
}
