import React from 'react'
import Button from './Button'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
            <div className="conatiner">
                <Button/>
            </div>
        </div>
    )
}

export default Navbar
