import React from 'react'
import "./Card.css"

const Card = (props) => {
    return (
        <>
            <h1>Responsive Card</h1>
            <div className="wrapper">
                <div className="card">
                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-content">{props.desc}</p>
                    <button className="card-btn">READ MORE</button>
                </div>
                <div className="card">
                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-content">{props.desc}</p>
                    <button className="card-btn">READ MORE</button>
                </div>
                <div className="card">
                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-content">{props.desc}</p>
                    <button className="card-btn">READ MORE</button>
                </div>
            </div>
        </>
    )
}

export default Card
