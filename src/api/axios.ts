import axios from "axios";
import ENV from "../config/env";

const api = axios.create({
  baseURL: ENV.REACT_API_URL || "http://localhost:3004",
});

export default api;
