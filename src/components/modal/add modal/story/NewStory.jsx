import React, { useState } from 'react'
import "./style.css"
import { MdClose } from "react-icons/md";
import axios from 'axios';

const NewStory = ({NewStoryActivation, id}) => {
  const [imgLink, setImgLink] = useState("");

  const handleSend = async () => {
    try {
      const res = await axios.post(
        `http://localhost:5000/api/stories`, {userId: id, img: imgLink}
      );
      alert("ok")
    } catch (error) {
      alert("error")
      console.log(error)
    }
      
  };
  return (
    <div className='new_story_container'>
      <div className="card_new_storie">
      <button className="closeBtn" onClick={() => NewStoryActivation()}>
          <MdClose />
        </button>
        <h2>Add new story</h2>
        <div className="group_input">
            <input type="text" name="" placeholder='img' id="" onChange={(e)=>setImgLink(e.target.value)}/>
        </div>
        <button onClick={()=>handleSend()} className='send_btn'>Envoyer</button>
      </div>
    </div>
  )
}

export default NewStory
