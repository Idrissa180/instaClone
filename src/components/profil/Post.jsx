import React from "react";
import {FaHeart, FaMailchimp} from "react-icons/fa"

const Post = ({post, onModalPost}) => {
  return (
    <div className="profile_post_item" onClick={()=>onModalPost(post._id)}>
      <div className="hover">
            <p>12 <FaHeart/></p>
            <p>12 <FaMailchimp/></p>
      </div>
      <img src={post.img} alt="" />
    </div>
  );
};

export default Post;
