import React from 'react'
import { useState } from 'react'

const Data = () => {

    const [count, setCount] = useState(0)
    const decrement = () => {
        setCount(count - 1)
    }
    const increment = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <div className="card">
                <button disabled={count === 0} onClick={decrement}>-</button>
                {count}
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default Data
