import React, { useRef, useEffect } from 'react';

const Input = () => {
  // Create a ref object
  const myRef = useRef(null);

  // useEffect to demonstrate accessing the ref value after render
  useEffect(() => {
    // Accessing the current property of the ref object
    console.log('Ref value:', myRef.current);

    // You can perform operations with the DOM element, like setting focus
    if (myRef.current) {
      myRef.current.focus();
    }
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div>
      {/* Attach the ref object to an input element */}
      <input type="text" ref={myRef} />

      {/* Rest of your component content */}
    </div>
  );
};

export default Input;
