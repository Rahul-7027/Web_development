"use client"

import {handleSubmit} from "@/actions/form"
import { useRef } from "react";

export default function Home() {
let ref=useRef()
  return (
    <div>
      <form action={(e)=>{handleSubmit(e);ref.current.reset()}} ref={ref}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" type="text" className="text-black" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
