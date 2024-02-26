import React from 'react'
import Count from './Count'

const Button = (props) => {
  return (
    <div>
        Button
      <Count count={props.count}/>
    </div>
  )
}

export default Button
