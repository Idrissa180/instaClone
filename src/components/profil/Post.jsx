import React from "react";
import {FaHeart, FaMailchimp} from "react-icons/fa"

const Post = ({img}) => {
  return (
    <div className="profile_post_item">
      <div className="hover">
            <p>12 <FaHeart/></p>
            <p>12 <FaMailchimp/></p>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default Post;
