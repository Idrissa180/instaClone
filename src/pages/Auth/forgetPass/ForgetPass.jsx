import React from 'react'
import { NavLink } from 'react-router-dom'
import "../auth.css"

export const ForgetPass = () => {
  return (
    <div className="auth_container">
      <div className="auth_card_container">
        <div className="auth_card">
          <h3>Problème de connexion ?</h3>
          <p>Entrez votre adresse e-mail, votre numéro de téléphone ou votre nom d’utilisateur, et nous vous enverrons un lien pour récupérer votre compte.</p>
          <input
            type="text"
            placeholder="E-mail, téléphone ou nom d'utilisateur"
          />
          <button>Envoyer un lien de connexion</button>
          <NavLink to="/register" className="link_forget">Vous ne parvenez pas à réinitialiser votre mot de passe ?</NavLink>
        </div>
        <div className="auth_card">
          <p>
            Vous n'avez pas de compte ?{" "}
            <NavLink to="/register">Inscrivez-vous</NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}
