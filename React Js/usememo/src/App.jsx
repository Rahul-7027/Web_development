import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000
  }
})

function App() {
  const [count, setCount] = useState(0)
  // const handleIncrement=()=>{
  //   setCount(count+1)
  // }
  const [Number, setNumber] = useState(nums)
  // const magical = Number.find(item => item.isMagical === true); expensive computation 
  const magical = useMemo(() => Number.find(item => item.isMagical === true), [Number])
  return (
    <>
      <div>
        <span>Magical index :{magical.index}</span><br />
        {count}
        <button onClick={() => {
          setCount(count + 1);
          if (count === 10) {
            setNumber(new Array(10_000_000).fill(0).map((_, i) => {
              return {
                index: i,
                isMagical: i === 9_000_000
              }
            }))
          }
        }}>{count}</button>
      </div>
    </>
  )
}

export default App
