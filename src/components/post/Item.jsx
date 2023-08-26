import React from "react";
import statut from "../../assets/images/user.png"
import { GoKebabHorizontal } from "react-icons/go";
import {
  FaHeart,
  FaMailchimp,
  FaRegistered,
  FaShare,
  FaSmile,
} from "react-icons/fa";

const Item = ({post}) => {
  return (
    <div className="card_post">
      <div className="card_user_info">
        <div>
          <img src={post.img} alt="statut" />
          <strong>@username</strong>
          <span> . </span>
          <span>1j</span>
        </div>
        <button>
          <GoKebabHorizontal />
        </button>
      </div>
      <div className="card_post_slider"></div>
      <div className="post_info">
        <div>
          <FaHeart className="icon" />
          <FaMailchimp className="icon" />
          <FaShare className="icon" />
        </div>
        <FaRegistered className="icon" />
      </div>

      <p>
        <strong>18 436 J’aime</strong>
      </p>
      <p>
        <strong>insta2genies</strong> {post.description}⠀...{" "}
      </p>
      <p>
        <span>plus</span>
      </p>
      <p>
        <span>Afficher les 163 commentaires</span>
      </p>
      <div className="post_item_comment">
        <p>
          <strong>insta2genies</strong> Du coup j'espère que vous avez compris
        </p>
        <FaHeart className="icon" />
      </div>

      <div className="post_input_container">
        <input type="text" placeholder="Ajouter un commentaire..." />
        <FaSmile className="icon" />
      </div>
    </div>
  );
};

export default Item;
