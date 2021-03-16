import React, { useRef, useState } from 'react';
import useHover from '../hooks/useHover';
import useTimeout from '../hooks/useTimeout';
import useDebounce from '../hooks/useDebounce';
import useDebounceFn from '../hooks/useDebounceFn';

const RenderHoverComp = () => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div>
      <span ref={hoverRef} id="hover">
        {isHovered ? 'hovered' : `hover me`}
      </span>
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

const renderDebounce = () => {
  const [inputRef, debouncedValue] = useDebounce({ delay: 1000 });

  return (
    <div>
      <input
        id="debounce"
        type="text"
        style={{ border: '1px solid #ccc' }}
        ref={inputRef}
      ></input>
      Value: {debouncedValue}
    </div>
  );
};

const renderDebounceFn = () => {
  const [value, setValue] = useState('');
  const [inputRef, debouncedValue] = useDebounceFn({ delay: 1000 });

  debouncedValue(() => {
    console.log('sdf');
  });

  return (
    <div>
      <input
        id="debouncefn"
        type="text"
        style={{ border: '1px solid #ccc' }}
        ref={inputRef}
      ></input>
      Value: {value}
    </div>
  );
};

export default function App() {
  return (
    <div>
      {RenderHoverComp()}
      <br></br>
      {renderTimeoutInput()}
      <br></br>
      {renderDebounce()}
      {/* <br></br>
      {renderDebounceFn()} */}
    </div>
  );
}
