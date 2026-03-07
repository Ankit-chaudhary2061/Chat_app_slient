import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:6767/api",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,  // 🔥 important
});




export default api 