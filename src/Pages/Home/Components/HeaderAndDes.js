//Libraries
import React from 'react'
//Components

//CSS
import './styles/HeaderAndDes.css'


function HeaderAndDes(props) {
    return (
        <div className='process-description'>
            <h2 className='processsTitle'>{props.titleName}</h2>
            <p className='processParagraph'>{props.Description}</p>
        </div>
    )
}

export default HeaderAndDes