import React from 'react'
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import "./note.css"


function Note({ note }) {
  const navigate = useNavigate();
  const createdDay = note.created.slice(8, 10);
  const createdMonth = note.created.slice(5, 7);
  const createdYear = note.created.slice(0, 4);
  const createdDate = `${createdDay}-${createdMonth}-${createdYear}`

  // Functions
  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/note/delete/${note.id}/`)
    window.location.reload();
    navigate('/');
  }

  return (
    <div className='row py-2'>
      <div className='col-1'>
        <button className='note-id-button' onClick={()=>{navigate(`/notes-list/${note.id}`)}}>
          {note.id}
        </button>
      </div>
      <div className='col-8'>{note.body}</div>
      <div className='col-2'>
        <span>{createdDate}</span>
      </div>
      <div className='col-1'style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <button className='note-delete-button' onClick={handleDelete} >
          <MdDelete size={17} style={{color:"#d11a2a"}}/>
        </button>
      </div>
    </div>
  )
}

export default Note