import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Note from '../components/note';
import CreateButton from '../components/createButton';


function NotesListPage() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])


    async function getNotes() {
        // Given below is an Axios response object, not the actual array of notes
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/notes/`)
        // Actual array of notes
        const notesData = response.data

        console.log("Notes :", notesData)
        setNotes(notesData)
    }

    return (
        <div>
            <div className='text-center' style={{ paddingTop: "4rem", fontSize:"2rem" }}>Notes List</div>
            <div className='all-notes container'>
                <div className='row mb-2'>
                    <div className='col-1' style={{fontSize:"1.5rem"}}>ID</div>
                    <div className='col-8' style={{fontSize:"1.5rem"}}>Note</div>
                    <div className='col-2' style={{fontSize:"1.5rem"}}>Created on</div>
                    <div className='col-1' style={{fontSize:"1.5rem"}}>Delete</div>
                </div>
                {notes.map(
                    (note, index) => (<Note key={index} note={note} />))
                }
            </div>
            <div>
                <CreateButton />
            </div>
        </div>
    )
}

export default NotesListPage;