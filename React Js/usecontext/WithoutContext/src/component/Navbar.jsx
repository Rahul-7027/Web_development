import React from 'react'
import Button from './Button'

const Navbar = (props) => {
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
            <div className="conatiner">
                <Button count={props.count}/>
            </div>
        </div>
    )
}

export default Navbar
