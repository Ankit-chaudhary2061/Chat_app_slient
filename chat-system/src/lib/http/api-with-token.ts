import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:6767/api",
  withCredentials: true,   // ⭐ important
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;