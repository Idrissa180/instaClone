import React from 'react'
import { FaRegWindowClose }from 'react-icons/fa'
import img from "../../assets/images/user.png"

export default function Folowers({close}) {
  return (
    <div className='profil_modal_container'>
      <div className="card_modal_container">
        <div className="title">
            <h3>Followers</h3>
            <FaRegWindowClose onClick={() => close("follower")} className='icon'/>
        </div>
        <div className="input_container_modal_profile">
            <input type="search" name="" id="" placeholder='Recherche'/>
        </div>
        <div className="list_modal_content_profile">
            <div className="item">
                <div>
                    <img src={img} alt="" />
                    <span>
                        <h4>user</h4>
                        <h5>user user</h5>
                    </span>
                </div>
                <button>Supprimer</button>
            </div>
            <div className="item">
                <div>
                    <img src={img} alt="" />
                    <span>
                        <h4>user</h4>
                        <h5>user user</h5>
                    </span>
                </div>
                <button>Supprimer</button>
            </div>
            <div className="item">
                <div>
                    <img src={img} alt="" />
                    <span>
                        <h4>user</h4>
                        <h5>user user</h5>
                    </span>
                </div>
                <button>Supprimer</button>
            </div>
            <div className="item">
                <div>
                    <img src={img} alt="" />
                    <span>
                        <h4>user</h4>
                        <h5>user user</h5>
                    </span>
                </div>
                <button>Supprimer</button>
            </div>
            <div className="item">
                <div>
                    <img src={img} alt="" />
                    <span>
                        <h4>user</h4>
                        <h5>user user</h5>
                    </span>
                </div>
                <button>Supprimer</button>
            </div>
            <div className="item">
                <div>
                    <img src={img} alt="" />
                    <span>
                        <h4>user</h4>
                        <h5>user user</h5>
                    </span>
                </div>
                <button>Supprimer</button>
            </div>
            <div className="item">
                <div>
                    <img src={img} alt="" />
                    <span>
                        <h4>user</h4>
                        <h5>user user</h5>
                    </span>
                </div>
                <button>Supprimer</button>
            </div>
            <div className="item">
                <div>
                    <img src={img} alt="" />
                    <span>
                        <h4>user</h4>
                        <h5>user user</h5>
                    </span>
                </div>
                <button>Supprimer</button>
            </div>
            <div className="item">
                <div>
                    <img src={img} alt="" />
                    <span>
                        <h4>user</h4>
                        <h5>user user</h5>
                    </span>
                </div>
                <button>Supprimer</button>
            </div>
            <div className="item">
                <div>
                    <img src={img} alt="" />
                    <span>
                        <h4>user</h4>
                        <h5>user user</h5>
                    </span>
                </div>
                <button>Supprimer</button>
            </div>
            <div className="item">
                <div>
                    <img src={img} alt="" />
                    <span>
                        <h4>user</h4>
                        <h5>user user</h5>
                    </span>
                </div>
                <button>Supprimer</button>
            </div>
            <div className="item">
                <div>
                    <img src={img} alt="" />
                    <span>
                        <h4>user</h4>
                        <h5>user user</h5>
                    </span>
                </div>
                <button>Supprimer</button>
            </div>
        </div>
    </div>
    </div>
  )
}
