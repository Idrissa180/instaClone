import React from "react";
import { NavLink } from "react-router-dom";

const Suggestion = ({user}) => {
  return (
    <div className="suggestion">
      <img src={user.img} alt="statut" />
      <div>
        <h5>{user.username}</h5>
        <p>Suivi(e) par {user.nbrSuivi} personne(s)</p>
      </div>
      <NavLink to="/profil">Suivre</NavLink>
    </div>
  );
};

export default Suggestion;
