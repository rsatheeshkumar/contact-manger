import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3006/",
  headers: { "X-Custom-Header": "foobar" },
});
