import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import "../story/style.css"
import axios from 'axios';

const NewPost = ({NewPostActivation, id}) => {

  const [imgLink, setImgLink] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSend = async () => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/posts`, {user_id: id, title: title, description:description, img: imgLink}
      );
      alert("ok")
    } catch (error) {
      alert("error")
      console.log(error)
    }
      
  };

  console.log(id)
  return (
    <div className='new_story_container'>
      <div className="card_new_storie">
      <button className="closeBtn" onClick={() => NewPostActivation()}>
          <MdClose />
        </button>
        <h2>Add new post</h2>
        <div className="group_input">
            <input type="text" name="" placeholder='post titre' id="" onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="group_input">
            <input type="text" name="" placeholder='img du post' id="" onChange={(e)=>setImgLink(e.target.value)}/>
        </div>
        <div className="group_input">
            <textarea rows={4} type="text" name="" placeholder='Post description' id="" onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <button onClick={()=>handleSend()} className='send_btn'>Envoyer</button>
      </div>
    </div>
  )
}

export default NewPost
