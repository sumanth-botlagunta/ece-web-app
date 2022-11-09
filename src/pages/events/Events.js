import React from 'react'
import data from './dummyevent.json'
import Eventdesign from '../../design/Eventdesign'
// import Upcoming from '../../components/events/Events'

function Events() {
  return (
      <>
        <Eventdesign title={"Upcoming Events"} data ={data}/>
        <Eventdesign title={"Past Events"} data ={data}/>
      </>
  )
}
export default Events
