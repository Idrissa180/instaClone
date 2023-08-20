import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import "../auth.css";
import { login } from "../../../services/ApiRequest";
import Auth from "../../../context/Auth";
import UserContext from "../../../context/UserContext";


const Login = () => {
  const {  setIsAuthenticated } = useContext(Auth);
  const {  setIsUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleConnect = async () => {
    try {
      const response = await login(email, password);
      if (response) {
        setIsAuthenticated(response.status);
        setIsUser(response.info);
      }
    } catch (err) {
      alert("Votre Username ou le mot de passe est incorrect!!!");
    }
  };

  return (
    <div className="auth_container">
      <div className="auth_card_container">
        <div className="auth_card">
          <h1>
            <i>Instagram</i>
          </h1>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="Num. téléphone, nom d’utilisateur ou e-mail"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            placeholder="Mot de passe"
          />
          <button onClick={handleConnect}>Se connecter</button>
          <NavLink to="/register">
            <AiFillFacebook /> Se connecter avec Facebook
          </NavLink>
          <NavLink className="link_forget" to="/forgetPass">
            Mot de passe oublié ?
          </NavLink>
        </div>
        <div className="auth_card">
          <p>
            Vous n'avez pas de compte ?{" "}
            <NavLink to="/register">Inscrivez-vous</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
