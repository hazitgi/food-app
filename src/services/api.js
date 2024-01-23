import axios from "axios";
import { useNavigate } from "react-router";

const request = axios.create({
  baseURL: "https://qm.apto.co.in",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}` || "",
  },
});

request.interceptors.request.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err?.response?.status !== 401) {
      throw err;
    }
    if (err?.response?.status === 401) {
      localStorage.removeItem("token");
      useNavigate("/login");
    }
    if (typeof err?.response?.data?.error?.name !== "undefined") {
      if (err?.response?.data?.error?.name === "TokenExpiredError") {
        localStorage.removeItem("token");
        useNavigate("/login");
      }
    }
  }
);


export default request;