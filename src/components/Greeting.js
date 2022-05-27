import React from 'react'
import profpic from './../images/aya-profpic.png'
import './../css/greeting.css'

function Greeting(){
    return (
        <div id='greeting'>
            <div className='grid-2-container'>
                <div className='left-grid-item'>
                    <img id='profpic' src={profpic} alt='profpic'/>
                </div>
                <div className='right-grid-item'>
                    <h1 className='highlight-text'>Hellow!</h1>
                    <h1>I am <span className='color1'>Ruhiyah Faradishi Widiaputri</span></h1>
                    <p>a third year computer science student who loves to learn and grow</p>
                    <p className="ket">Nice to meet you ^^</p>
                </div>
            </div>
        </div>
    )
}

export default Greeting 