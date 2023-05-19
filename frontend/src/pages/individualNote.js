import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate  } from 'react-router-dom';
import "./individualNote.css"


function IndividualNote() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState(null)
  const [updateBody, setUpdateBody] = useState("")

  useEffect(() => {
    getNote()
  }, [])


  // ------------------------------------------------------------Functions------------------------------------------------------------
  async function getNoteById() {
    // Given below is an Axios response object, not the actual array of notes
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/note/${id}/`)
    // Actual array of notes
    const noteData = response.data
    setNote(noteData)
  }

  async function getNote() {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/note/${id}/`)
      .then(response => {
        // When no error is there
        getNoteById()
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          const errorMessage = 'Note not found';
          console.error(errorMessage);
        } else {
          // Handle other errors
          console.error(error);
        }
      });
  }

  async function updateNoteById() {
    try { 
      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/note/update/${id}/`, {body:updateBody})
      .then(response => {
        console.log('Update successful:', response);
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });

    } catch (error) {
      console.error('Error updating data:', error);
    }
  }


  const handleSubmit = () => {
    updateNoteById()
    navigate('/');
  }

  return (
    <div className='text-center py-4'>
      <h2>Note : {id}</h2>
      <p>
        {note ? note.body : "No Results Found"}
      </p>
      <h4 style={{marginTop:"5rem"}}>Want to edit :</h4>
      <div>
        <textarea style={{height:"8rem", width:"50%"}} onChange={(event)=>{setUpdateBody(event.target.value)}}></textarea>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default IndividualNote