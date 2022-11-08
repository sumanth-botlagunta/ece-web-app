import React from 'react'
import './hearald.css';
import Issues from '../../components/hearld/Hearld'

function Hearald() {
  return (
    <div className='hearld'>
        <div className="description">
            <h1>ABOUT</h1>
            <p>
              Hearld is the official newsletter of the ECE Association. It is published once a month and is distributed to all the students of the department. It contains the latest updates about the department, events, and other important information.
            </p>
        </div>
        <Issues />
    </div>
  )
}

export default Hearald