import axios from "axios";

export const userInstance = axios.create({
  baseURL: "http://localhost:4000/api/users",
  timeout: 1000 * 1,
  // headers:
});
