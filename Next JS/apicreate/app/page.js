'use client'
import { useState } from "react";
export default function Home() {


  const handleClick = async () => {
    let data={
      name:"rahul",
      role:"coder"
    }
    const response = await fetch("./api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();
    console.log(res);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next.js API Demo</h1>
      <button  onClick={handleClick}>Click Me</button>

    </main>
  );
}
