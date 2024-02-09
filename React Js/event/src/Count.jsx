import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Rahul Bhati")
    const [value, setValue] = useState({ email: "", password: "" })
    const handleDec = () => {
        setCount(count - 1)
    }
    const handleIncr = () => {
        setCount(count + 1)
    }

    const handleMouse = () => {
        console.log("I am handleMouse")
    }

    const handlechange = (e) => {
        setName(e.target.value)
        setValue({ ...value, [e.target.name]: e.target.value })
    }
    console.log(111,value)
    return (
        <div>
            <div className="button">
                <button disabled={count === 0} onClick={handleDec}>-</button>
                {count}
                <button onClick={handleIncr}>+</button>
            </div>
            <div className="red" onMouseOver={handleMouse}>
                I am red box
            </div>
            <div className="text" >
                <input type="text" value={name} onChange={handlechange} /><br />
                <input type="text" name='email' value={value.email} onChange={handlechange} /><br />
                <input type="text" name='password' value={value.password} onChange={handlechange} />

            </div>
        </div>
    )
}

export default Count
