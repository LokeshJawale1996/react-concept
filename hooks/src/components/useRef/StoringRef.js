import React from 'react'
import { useRef } from 'react';

const StoringRef = () => {
    const inputRef = useRef(null);

    // We create an inputRef ref and pass it to the ref attribute of the input element. In the handleFocus function, we use the current property of inputRef to call the focus method on the input elemen
    function handleFocus() {
      inputRef.current.focus();
    }
  
    return (
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleFocus}>Focus input</button>
      </div>
    );
}

export default StoringRef