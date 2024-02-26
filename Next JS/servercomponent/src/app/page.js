"use client"

import { useState } from "react";
export default function Home() {
  const [count, setCount] = useState(0)
  return (
    <div className="h-screen flex items-center justify-center">
      <div><button type="button" className="text-white bg-blue-700" onClick={() => { setCount(count - 1) }}>-</button> </div>
      <span>{count}</span>
      <div><button type="button" className="text-white bg-blue-700" onClick={() => { setCount(count + 1) }}>+</button></div>
    </div>
  );
}
