import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Case 1: Run on every render 
  useEffect(() => {
    console.log("Hey I will run on every render")
  })

  // Case 2 : Run only on the first render 
  useEffect(() => {
    console.log("Welcome page")
  }, [])

  // Case 3 : Updates on chnages then run and run only when certain changes 
  useEffect(() => {
    console.log("Count was changed")
  }, [count])

  useEffect(() => {
    // This code runs when the component is mounted

    // Cleanup function
    return () => {
      // This code runs when the component is unmounted
      console.log('Component is unmounted');
      // Perform any cleanup or unsubscribe from subscriptions here
    };
  }, []); // The empty dependency array ensures that this effect runs only once (on mount)


  // [] empty array means that work on first render mount this component 
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
