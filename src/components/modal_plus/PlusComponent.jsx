import React from 'react'
import "./style.css"

export const PlusComponent = ({deconnect, NewStoryActivation, NewPostActivation}) => {
  return (
    <div className='plus_component'>
        <button className="button_items" onClick={()=>NewPostActivation()}>New post</button>
        <button className="button_items" onClick={()=>NewStoryActivation()}>New Storie</button>
        <button onClick={deconnect} >LogOut</button>
    </div>
  )
}
