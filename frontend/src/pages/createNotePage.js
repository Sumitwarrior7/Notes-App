import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom';
import axios from 'axios'


function CreateNotePage() {
  const [note, setNote] = useState("")
  const navigate = useNavigate();

  const handleClick = async () => {
    console.log("Create button is clicked :", note)

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/note/create/`, { body: note });
      console.log(response.data)
      navigate('/');
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className='px-5 py-4'>
      <div className='row display-6 d-flex justify-content-center mb-4'>
        Create Note
      </div>
      <div className='row d-flex justify-content-center'>
        <textarea onChange={(e) => { setNote(e.target.value) }} style={{ height: "20rem", width:"60%" }}></textarea>
      </div>
      <div className='row d-flex justify-content-center mt-3'>
        <button type="button" class="btn btn-secondary" onClick={handleClick} style={{width:"8%"}}>Create</button>
      </div>
    </div>
  )
}

export default CreateNotePage