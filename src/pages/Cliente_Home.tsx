import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";
import Services from "./Services";
import type { UserType } from "../types/User";

export default function ClienteHome() {
  const [saldo, setSaldo] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchUser() {
      if (!token) {
        navigate("/");
        return;
      }

      try {
        const res = await api.get("/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const user = res.data.user;
        const userTipo: UserType = user.tipo;

        console.log(user);
        if (userTipo !== "CLIENTE") {
          alert("Acesso permitido apenas para clientes");
          navigate("/");
          return;
        }

        setSaldo(user.saldo);
      } catch (err) {
        console.error("Erro ao carregar usuário", err);
        navigate("/");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [token, navigate]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
          background: "#eee",
        }}
      >
        <span>Saldo: {saldo.toFixed(2)}</span>
        <div>
          <button onClick={() => navigate("/historico")}>Histórico</button>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Passa saldo e função para atualizar para o Services */}
      <div style={{ marginTop: "1rem" }}>
        <Services saldo={saldo} setSaldo={setSaldo} />
      </div>
    </div>
  );
}
