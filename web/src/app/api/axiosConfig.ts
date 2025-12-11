import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-type": "Application/json" },
  withCredentials: true,
});

