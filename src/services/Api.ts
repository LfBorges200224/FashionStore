import axios from "axios";

export const api = axios.create({
  baseURL: "https://fashion-kenzie-api.onrender.com/",
});
