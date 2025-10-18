// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import { Reservation } from "../types/Reservation";

// export default function Reservations() {
//   const [reservations, setReservations] = useState<Reservation[]>([]);

//   useEffect(() => {
//     const fetchReservations = async () => {
//       const token = localStorage.getItem("token");
//       const res = await api.get("/reservations", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setReservations(res.data);
//     };
//     fetchReservations();
//   }, []);

//   return (
//     <div>
//       <h1>Minhas Reservas</h1>
//       <ul>
//         {reservations.map((r) => (
//           <li key={r.id}>
//             Serviço: {r.servicoId} - Valor: R$ {r.valor} - Status: {r.status}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
