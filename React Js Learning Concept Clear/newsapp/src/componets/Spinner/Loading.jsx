import React from 'react'
import Spinner from "../Images/loading.gif"

const Loading = () => {
  return (
    <div>
      <img className='my-3' style={{display: "block", margin:" 0 auto"}} src={Spinner} alt="" />
    </div>
  )
}

export default Loading
