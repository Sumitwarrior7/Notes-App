import React from 'react'

function Header() {
  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    fontSize: '2.3rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div style={headerStyle}>
      Notes App
    </div>
  )
}

export default Header