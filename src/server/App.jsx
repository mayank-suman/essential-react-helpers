import React, { useState } from 'react';
import useHover from '../hooks/useHover';
import useTimeout from '../hooks/useTimeout';

const RenderHoverComp = () => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div>
      <span ref={hoverRef}>{isHovered ? 'hovered' : `hover me`}</span>
    </div>
  );
};

const renderTimeoutInput = () => {
  const [value, setValue] = useState('');
  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const [timeoutValue] = useTimeout(value, { delay: 1000 });

  return (
    <div>
      <input
        type="text"
        style={{ border: '1px solid #ccc' }}
        onChange={handleChange}
      ></input>
      Value: {timeoutValue}
    </div>
  );
};

export default function App() {
  return (
    <div>
      {RenderHoverComp()}
      <br></br>
      {renderTimeoutInput()}
    </div>
  );
}
