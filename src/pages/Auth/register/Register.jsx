import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../auth.css";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    Username: "",
    Password: "",
  });

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        user
      );
      console.log(response);
    } catch (err) {
      alert("Wrong credentials!!!");
    }
  };

  return (
    <div className="auth_container">
      <div className="auth_card_container">
        <div className="auth_card">
          <h1>
            <i>Instagram</i>
          </h1>
          <h5>Inscrivez-vous pour voir les photos et videos de vos amis</h5>
          <button>Se connecter avec Facebook</button>
          <input
            type="text"
            placeholder="Num. téléphone, e-mail"
            name="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Votre nom "
            name="nom"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Votre prenom"
            name="prenom"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Mot de passe"
            name="password"
            onChange={handleChange}
          />
          <p>
            Les personnes qui utilisent notre service ont pu importer vos
            coordonnées sur Instagram. <NavLink to="">En savoir plus</NavLink>
          </p>
          <p>
            En vous inscrivant, vous acceptez nos Conditions générales, notre
            Politique de confidentialité et notre Politique d’utilisation des
            cookies.
          </p>
          <button onClick={handleSubmit}>S'inscrire</button>
        </div>
        <div className="auth_card">
          <p>
            Vous avez un compte ? <NavLink to="/">Connectez-vous</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
