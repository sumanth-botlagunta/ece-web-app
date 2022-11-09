import React from 'react'
import './hearlddesign.css'

const Hearlddesign = props => {
    
  return (
    <div className='main'>
        
        {
            props.title? <h1>{props.title}</h1> : null
        }
        <div className="container">
            {
                props.data.map((item, index) => {
                    const a = item.date;
                    const date = new Date(a);
                    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                    const month = months[date.getMonth()];
                    const year = date.getFullYear();
                    if(index < props.length){
                        return (
                            <div className="glass" key={index}>
                                <div className="image">
                                    <img src={item.image} alt={item.title}/>
                                </div>
                                <div className="content">
                                    <h5 >{month}  {year}</h5>
                                </div>
                            </div>
                        );
                    }
                })
            }
                
        </div>
    </div>
  )
}


export default Hearlddesign