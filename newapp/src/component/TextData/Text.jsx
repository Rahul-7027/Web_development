import React, { useState } from 'react';

const Text = (props) => {
  const [text, setText] = useState("")
  const handleUpper = () => {
    setText(text.toUpperCase())
    props.alert("Convert To UpperCase", "success")
  }
  const handleLower = () => {
    setText(text.toLowerCase())
    props.alert("Convert To LowerCase", "success")
  }
  const handleCaptial = () => {
    setText(text.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))
    props.alert("Convert To First Capital UpperCase", "success")
  }
  const handleClear = () => {
    setText("")
    props.alert("Clear", "success")
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    props.alert("Copy to Clipboard", "success")
  }
  const handleRemove = () => {
    setText(text.replace(/\s+/g, ' ').trim())
    props.alert("Remove Extra Space", "success")
  }
  return (
    <div>
      <div className="container" style={{ color: props.mode === "dark" ? 'white' : '#042743' }}>
        <h3>{props.heading}</h3>
        <textarea className="form-control" value={text} onChange={(e) => setText(e.target.value)} placeholder="Leave a text here" rows="8"></textarea>
        <div className="button my-3">
          <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2' onClick={handleUpper}>UpperCase</button>
          <button disabled={text.length === 0} className='btn btn-secondary my-2 mx-2' onClick={handleLower}>LowerCase</button>
          <button disabled={text.length === 0} className='btn btn-danger my-2 mx-2' onClick={handleClear}>Clear</button>
          <button disabled={text.length === 0} className='btn btn-success my-2 mx-2' onClick={handleCaptial}>Convert To First Letter Capital</button>
          <button disabled={text.length === 0} className='btn btn-warning my-2 mx-2' onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length === 0} className='btn btn-info my-2 mx-2' onClick={handleRemove}>Remove Extra Space</button>
        </div>
      </div>
      <div className="container" style={{ color: props.mode === "dark" ? 'white' : '#042743' }}>
        <h3>{props.summary}</h3>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} and {text.length} character </p>
        <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>

    </div>

  )
}

export default Text;
