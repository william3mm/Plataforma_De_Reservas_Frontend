import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Reservations from "./pages/Reservation";
import ClienteHome from "./pages/Cliente_Home";
import Services from "./pages/Services";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home/cliente" element={<ClienteHome />} />

        <Route path="/reservations" element={<Reservations />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}
