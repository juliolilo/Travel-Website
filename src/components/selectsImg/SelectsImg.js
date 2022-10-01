import React from 'react'
import './selectsImg.css'

function SelectsImg({bgImg, text}) {
    return (
        <div className='selects-location'>
            <img src={bgImg} alt='/' />
            <div className="overlay">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default SelectsImg;