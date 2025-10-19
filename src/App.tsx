import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Services from "./pages/Services";
import Reservations from "./pages/Reservation";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </BrowserRouter>
  );
}
