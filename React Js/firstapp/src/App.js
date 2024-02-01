import './App.css';
import { useState } from 'react';
import Navbar from './component/navbar';
import Footer from './component/Footer';

function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  return (
    <div className="App">
      <Navbar logo={"Happy"}/>
      {count}
      <div className="button ">
        <button type="button" style={{ margin: "20px" }} onClick={increment}>Increment</button>
        <button type="button" disabled={count === 0} onClick={decrement}>Decrement</button>
        {/* Disabled Pointing for 
        1. disabled={count === 0}
        2. disabled={count <= 0} */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
