import React,{useContext} from 'react'
import { countContext } from '../Context'

const Count = () => {
    const counter=useContext(countContext)
  return (
    <div>
     {counter}
    </div>
  )
}

export default Count
