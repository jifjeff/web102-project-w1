import React from 'react'

const Game = (props) => {
    return (
        <>
        <div>
            <p>{props.company}</p>
            <img src={props.img} alt="" id="c-logo"/>
            <a href={props.link} target="_blank">Link</a>
        </div>
        </>     
    )
    
}

export default Game