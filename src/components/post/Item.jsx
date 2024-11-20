import React, { useContext } from "react";
import statut from "../../assets/images/user.png";
import { GoKebabHorizontal } from "react-icons/go";
import UserContext from "../../context/UserContext";
import axios from "axios";
import {
  FaHeart,
  FaMailchimp,
  FaRegistered,
  FaShare,
  FaSmile,
} from "react-icons/fa";

const Item = ({ post, onModalPost, setPosts }) => {
  const { isUser } = useContext(UserContext);

  const handleLike = async (postId) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/likes/`, {
        postId: postId,
        userId: isUser.id,
      });
      const resp = await axios.get(`http://localhost:5000/api/posts`);
      setPosts(resp.data);
      // alert(response.data);
    } catch (err) {
      console.log(err);
    }
  };

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
      <div className="card_post_slider">
        <img src={post.img} alt="" onClick={() => onModalPost(post._id)} />
      </div>
      <div className="post_info">
        <div>
          <FaHeart className="icon" onClick={() => handleLike(post._id)} />
          <FaMailchimp className="icon" />
          <FaShare className="icon" />
        </div>
        <FaRegistered className="icon" />
      </div>

      <p>
        <strong>{post.likes} J’aime</strong>
      </p>
      <p>
        <strong>insta2genies</strong> {post.description}⠀...{" "}
      </p>
      <p>
        <span>plus</span>
      </p>
      <p>
        <span>{`Afficher les ${post.comments}  commentaires`}</span>
      </p>
      {post.commentsList?.map((comment, indexer) => (
        <div className="post_item_comment" id={indexer}>
          <p>
            <strong>insta2genies</strong> {comment.desc}
          </p>

          <FaHeart className="icon" />
        </div>
      ))}
      <div className="post_input_container">
        <input type="text" placeholder="Ajouter un commentaire..." />
        <FaSmile className="icon" />
      </div>
    </div>
  );
};

export default Item;
