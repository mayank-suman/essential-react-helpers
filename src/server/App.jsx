import React, { useState } from 'react';
import useHover from '../hooks/useHover';
import useDebounce from '../hooks/useDebounce';

const RenderHoverComp = () => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div>
      <span ref={hoverRef}>{isHovered ? 'hovered' : `hover me`}</span>
    </div>
  );
};

const renderDebounceInput = () => {
  const [value, setValue] = useState('');
  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const [debouncedValue] = useDebounce(value);

  return (
    <div>
      <input
        type="text"
        style={{ border: '1px solid #ccc' }}
        onChange={handleChange}
      ></input>
      Value: {debouncedValue}
    </div>
  );
};

export default function App() {
  return (
    <div>
      {RenderHoverComp()}
      {renderDebounceInput()}
    </div>
  );
}
