// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import { Service } from "../types/Service";

// export default function Services() {
//   const [services, setServices] = useState<Service[]>([]);

//   useEffect(() => {
//     const fetchServices = async () => {
//       const res = await api.get("/services");
//       setServices(res.data);
//     };
//     fetchServices();
//   }, []);

//   return (
//     <div>
//       <h1>Serviços</h1>
//       <ul>
//         {services.map((s) => (
//           <li key={s.id}>
//             {s.nome} - R$ {s.preco} <br />
//             {s.descricao}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
