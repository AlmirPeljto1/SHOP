//IMPORTS
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
//PAGE LOGIN
const Login = () => {
  //STATES
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //REDUX DISPATCH
  const dispatch = useDispatch();
  //HANDLER
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: "10px", marginBottom: "10px" }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        style={{ padding: "10px", marginBottom: "10px" }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={handleClick} style={{ padding: "5px 30px" }}>
        login
      </button>
    </div>
  );
};

export default Login;
