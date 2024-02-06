import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [btn, setBtn] = useState(false)
  const todo = [{
    title: "I am first title",
    desc: "I am desc"
  },
  {
    title: "I am second title",
    desc: "I am second desc"
  }]
  const [newTodo, setTodo] = useState(todo)

  return (
    <>
<h1>Vite + React</h1>
      {newTodo.map((item, index) => {
        return (
          <div key={index}>
            {console.log(111,item)}
            <div className="title">{item.title}</div>
            <div className="desc">{item.desc}</div>
          </div>)
      })}
      
      {btn && <button>I am button</button>}
      {/* {btn ? <button>Show Data</button> : "No Data"} using for ternery operator  */}
      <div className="card">
        <button onClick={() => setBtn(!btn)}>
          Show & Hide
        </button>
      </div>
    </>
  )
}

export default App
