import { useContext, useState } from "react";
import request from "../../../services/api";
import { MyContext } from "../../../App";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({
    usernameError: "",
    passwordError: "",
  });

  const { username, password } = data;
  const { usernameError, passwordError } = error;

  const userContext = useContext(MyContext);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    console.log(data);
    if (!username) {
      setError({ ...error, usernameError: "username is required" });
    }
    if (!password) {
      setError({ ...error, passwordError: "password is required" });
      console.log(">> no password");
      console.log(error);
    }
    if (username && password) {
      setError({ ...error, usernameError: "", passwordError: "" });
      request.post("/api/login", {
        email: username,
        password: password,
      })
        .then((res) => {
          console.log(res);
          userContext.user = res?.data?.result.name
          localStorage.setItem("token", res?.data?.result.token);
          // forward to the homepage
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <section className="forms-pre">
        <div className="container">
          <form className="box" onSubmit={handleSubmitClick}>
            <div className="form-wrap">
              <div className="secondary-header text-center">Sign in</div>

              <div className="form-group">
                <input
                  label="Username"
                  name="username"
                  placeholder="Username"
                  className="form-control"
                  value={username}
                  onChange={changeHandler}
                />
                {usernameError && (
                  <small className="text-danger">{usernameError}</small>
                )}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  value={password}
                  onChange={changeHandler}
                />
                {passwordError && (
                  <small className="text-danger">{passwordError}</small>
                )}
              </div>

              {/* Submit Button */}
              <div className="footer">
                <button
                  className="btn btn-primary"
                  type="submit"
                  label="Sign in"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
