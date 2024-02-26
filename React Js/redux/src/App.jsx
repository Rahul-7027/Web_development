import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter/counterSlice';
import './App.css'

// Learning React Reducer ---> https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux#:~:text=Reducers%3A%20As%20we%20already%20know,the%20state%20of%20the%20application.

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <div className="container">
          <button disabled={count === 0} aria-label='Decrenent Value' onClick={() => dispatch(decrement())}> Decrement </button>
          <span>{count}</span>
          <button aria-label="Increment value" onClick={() => dispatch(increment())} >Increment</button>
        </div>
      </div>
    </>
  )
}

export default App
