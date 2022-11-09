import React from 'react'
import './aboutdesign.css'

const Aboutdesign = props => {
  return (
    <>
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
                                    <img src={item.avatar} alt={item.name}/>
                                </div>
                                <div className="content">
                                    <h5 >{item.name}</h5>
                                    <p>{item.role} </p>
                                    <p>📧 {item.email}</p>
                                </div>
                            </div>
                        )
                    })
                }
                    
            </div>
        </div>
    </>
  )
}


export default Aboutdesign