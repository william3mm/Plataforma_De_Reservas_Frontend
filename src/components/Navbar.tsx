// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/home/cliente" className="navbar__link">
        Home
      </Link>
      <Link to="/services" className="navbar__link">
        Serviços
      </Link>
      <Link to="/reservations" className="navbar__link">
        Reservas
      </Link>
    </nav>
  );
}
