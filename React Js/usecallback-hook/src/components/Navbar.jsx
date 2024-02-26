import React from 'react'
import { memo } from 'react'
const Navbar = (props) => {
    console.log("I am render")
    return (
        <div>
            I am {props.good} Navbar
            <button onClick={()=>props.adjectiveData()}>Click Me</button>
        </div>
    )
}

export default memo(Navbar)
