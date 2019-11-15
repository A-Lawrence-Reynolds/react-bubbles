import React, { useState } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";

const Login = props => {
  const [auth, setAuth] = useState({ username: "", password: "" });

  const handelChange = e => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    AxiosWithAuth()
      .post("api/login", auth)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(error => console.log("Login Error", error.response));
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input
            className="button-row"
            type="text"
            name="username"
            placeholder="Username"
            value={auth.username}
            onChange={handelChange}
          />
          <input
            className="button-row"
            type="text"
            name="password"
            placeholder="Password"
            value={auth.password}
            onChange={handelChange}
          />
          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
