import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-type": "application/json",
  },
});

export const baseURL = "http://localhost:3001";
