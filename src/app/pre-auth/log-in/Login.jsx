import { useState } from "react";

export const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    console.log(data);
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
              </div>

              {/* Submit Button */}
              <div className="footer">
                <button
                  className="btn btn-primary"
                  type="submit"
                  label="Sign in"
                  onClick={handleSubmitClick}
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
