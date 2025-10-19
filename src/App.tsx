import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Reservations from "./pages/Reservation";
import ClienteHome from "./pages/Cliente_Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home/cliente" element={<ClienteHome />} />

        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </BrowserRouter>
  );
}
