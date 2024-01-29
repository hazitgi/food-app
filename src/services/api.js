import axios from "axios";

const request = axios.create({
  baseURL: "https://qm.apto.co.in",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}` || "",
  },
});

request.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log("erorr");
    console.log(err?.response?.status);
    if (err?.response?.status === 401) {
      localStorage.removeItem("token");
      window.location = window.location.protocol + "//" + window.location.host + "/login"
    }
    if (typeof err?.response?.data?.error?.name !== "undefined") {
      if (err?.response?.data?.error?.name === "TokenExpiredError") {
        localStorage.removeItem("token");
      }
    }
    return Promise.reject(err);
  }
);

export default request;