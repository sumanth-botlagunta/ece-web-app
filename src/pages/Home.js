import React from 'react'
import Welcome from '../components/welcome/Welcome';
import Eventdesign from '../design/Eventdesign';
import Hearlddesign from '../design/Hearlddesign';
import eventdata from './events/dummyevent.json';
import hearalddata from './hearald/dummyhearld.json';



function Home() {
  return (
    <div className='Home'>
        <Welcome />
        <Eventdesign Eventdesign title={"Upcoming Events"} data ={eventdata} />
        <Hearlddesign title={'Hearld Magazines'} length = {4} data={hearalddata}/>
    </div>
  )
}

export default Home