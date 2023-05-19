import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./createButton.css"
import { GrFormAdd } from 'react-icons/gr';


function CreateButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/create-note');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button type="button" style={{backgroundColor:"white"}} onClick={handleClick} class="btn btn-dark btn-circle btn-xl">
        <GrFormAdd size={35}/>
      </button>
    </div>
  );
}

export default CreateButton;