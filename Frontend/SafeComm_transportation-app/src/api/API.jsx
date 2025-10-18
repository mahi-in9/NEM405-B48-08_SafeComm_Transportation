//https://nem405-b48-08-safecomm-transportation-1.onrender.com/

// src/api/apiClient.js
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// export default API;
