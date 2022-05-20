import "../scss/components.css";
import logo from "../assets/logo.svg";
import Header from "../components/Header";
import OrderHistory from "./OrderHistory";
import { LoginContext } from "../context/LoginContext";

import { setUser, resetUser } from "../actions/userActions";
import { useState, useContext } from "react";
import { useDispatch } from "react-redux";

function LoginOverlay() {
  const dispatch = useDispatch();
  const { loggedIn, setLogin } = useContext(LoginContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gdpr, setGdpr] = useState(false);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  function handleClick() {
    console.log(`Username: ${username}
    Password: ${password}`);
    fetch(`http://localhost:8000/api/login`, {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success === true && gdpr === true) {
          console.log(result);
          dispatch(setUser(result));
          setLogin(true);
          setGdpr(true);
        } else if (result.success === true && gdpr === false) {
          alert("Click for GDPR acceptance");
        } else {
          console.log(result);
          alert("Username or passowrd incorrect, try again!");
        }
      });
  }
  function handleLogout() {
    setLogin(false);
    dispatch(resetUser());
  }

  return (
    <section
      className={loggedIn && gdpr ? "loginOverlay dark" : "loginOverlay"}
    >
      <Header></Header>
      {loggedIn ? (
        <div>
          <OrderHistory></OrderHistory>
          <button className="logOutBtn" type="submit" onClick={handleLogout}>
            Log out
          </button>
        </div>
      ) : (
        <div className="loginContainer">
          <img src={logo} alt="logo"></img>
          <h1 className="loginHeader">Login</h1>
          <p className="loginBread">
           Go to signup to create an account.
          </p>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsername}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePassword}
          ></input>
          <div className="gdpr">
            <input
              type="radio"
              id="gdpr"
              name="gdpr"
              value="true"
              onClick={() => {
                setGdpr(true);
              }}
            />
            <label htmlFor="gdpr">GDPR Ok!</label>
          </div>
          <br></br>
          <button type="submit" className="loginBtn" onClick={handleClick}>
            Login
          </button>
        </div>
      )}
    </section>
  );
}
export default LoginOverlay;
