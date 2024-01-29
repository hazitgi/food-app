import axios from "axios";
import { useNavigate } from "react-router-dom";

const createRequest = (navigate) => {
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
      console.log(err?.response?.status);

      if (err?.response?.status !== 401) {
        return Promise.reject(err);
      }
      if (err?.response?.status === 401) {
        localStorage.removeItem("token");
        // Redirect to the login page
        navigate("/login");
      }
      if (typeof err?.response?.data?.error?.name !== "undefined") {
        if (err?.response?.data?.error?.name === "TokenExpiredError") {
          localStorage.removeItem("token");
          // Redirect to the login page
          navigate("/login");
        }
      }
    }
  );

  return request;
};

const useRequest = () => {
  const navigate = useNavigate();
  return createRequest(navigate);
};

export default useRequest;
