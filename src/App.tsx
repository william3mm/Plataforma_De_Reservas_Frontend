// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ClienteHome from "./pages/Cliente_Home";
import Dashboard from "./pages/Dashboard"; // sua dashboard de prestador
import PrivateRoute from "./components/Private_Route";
import Reservations from "./pages/Reservation";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/home/cliente"
          element={
            <PrivateRoute allowedType="CLIENTE">
              <ClienteHome />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute allowedType="PRESTADOR">
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </BrowserRouter>
  );
}
