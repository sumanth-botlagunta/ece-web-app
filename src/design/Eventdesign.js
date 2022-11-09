import React from 'react'
import './eventdesign.css'

const Eventdesign = props => {
  return (
    <div className='main'>
        
        {
            props.title? <h1>{props.title}</h1> : null
        }
        <div className="container">
            {
                props.data.map((item, index) => {
                    return (
                        <div className="glass" key={index}>
                            <div className="image">
                                <img src={item.thumbnail} alt={item.event}/>
                            </div>
                            <div className="content">
                                <h5 >{item.event}</h5>
                                <p>on {item.date} at {item.time}</p>
                                <p>📌 {item.venue}</p>
                            </div>
                        </div>
                    )
                })
            }
                
        </div>
    </div>
  )
}


export default Eventdesign