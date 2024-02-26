import React from 'react'
import Footer from './Footer'

const navbar = ({logo}) => {
    return (

        // will get the data for using the destructor in react js like as  {logo}
        <div>
            {console.log(logo)}
            <ul style={{ display: "flex", listStyle: "none", backgroundColor: "black", color: "white", cursor:"pointer" }}>
                <li style={{ margin: "10px 10px" }}>Home</li>
                <li style={{ margin: "10px 10px" }}>About</li>
                <li style={{ margin: "10px 10px" }}>Contact US</li>
            </ul>
            {/* <Footer data={"Not good"}/> */}
        </div>
    )
}

export default navbar
