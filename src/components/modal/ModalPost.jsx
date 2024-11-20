import React from 'react'
import "./style.css"
import post from "../../assets/post.jpeg"

export default function ModalPost({onModalPost, postForModal}) {
  return (
    <div className='modal_post'>
        <button onClick={onModalPost} className="button_close">X</button>
        <div className="modal_container">
            <div className="img_content">
                <img src={postForModal.img} alt="" />
            </div>
            <div className="comment_content">
              <h3>{postForModal.title}</h3>
              <p>{postForModal.description}</p>
            </div>
        </div>
    </div>
  )
}
