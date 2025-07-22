import React, { useRef } from 'react';

function InputFocus() {
  const inputOne = useRef(null);

  const getInputBoxFocused = () => {
    inputOne.current.focus();
  }
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <input
        ref={inputOne}
        type="text"
        placeholder="Type here"
        style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
      />
      <button onClick={getInputBoxFocused} style={{ padding: '8px 12px' }}>
        Focus Input
      </button>
    </div>
  );
}

export default InputFocus;
