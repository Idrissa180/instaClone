import React from 'react'
import {Link} from 'react-router-dom'

export default function Setting({close}) {
  return (
    <div className='profil_modal_container'>
      <div className="card_setting card_modal_container">
        <Link to="/">Changer de mot de passe</Link>
        <Link to="/">Code QR</Link>
        <Link to="/">Application et sites webs</Link>
        <Link to="/">Notifications</Link>
        <Link to="/">Confidentialité et sécurité</Link>
        <button className='button' onClick={() => close("setting")} >Annuler</button>
      </div>
    </div>
  )
}
