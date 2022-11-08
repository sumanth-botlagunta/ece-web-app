import React from 'react'
import Welcome from '../components/welcome/Welcome';
import Events from '../components/events/Events';
import Hearld from "../components/hearld/Hearld";

function Home() {
  return (
    <div className='Home'>
        <Welcome />
        <Events />
        <Hearld />
    </div>
  )
}

export default Home