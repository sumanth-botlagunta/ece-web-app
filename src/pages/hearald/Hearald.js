import React from 'react'
import './hearald.css';
import Hearld from '../../design/Hearlddesign'
import data from './dummyhearld.json'

function Hearald() {
  const l = data.length;
  return (
    <div className='hearld'>
        <div className="description">
            <p>
            <h1 style={{display:'inline'}}>Hearld</h1> is the official newsletter of the ECE Association. It is published once a month and is distributed to all the students of the department. It contains the latest updates about the department, events, and other important information.
            </p>
        </div>
        <Hearld  length = {l} data={data}/>
    </div>
  )
}

export default Hearald