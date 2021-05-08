import React, { useState } from 'react';
import useHover from '../hooks/useHover';
import useTimeout from '../hooks/useTimeout';
import useDebounce from '../hooks/useDebounce';
import useDebounceFn from '../hooks/useDebounceFn';
import usePromise from '../hooks/usePromise';

const renderComponents = {
  RenderHoverComp: () => {
    const [hoverRef, isHovered] = useHover();

    return (
      <div>
        <span ref={hoverRef} id="hover">
          {isHovered ? 'hovered' : `hover me`}
        </span>
      </div>
    );
  },

  RenderTimeoutInput: () => {
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
  },

  RenderDebounce: () => {
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
  },

  RenderDebounceFn: () => {
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
  },
  RenderPromiseEx: () => {
    const waitForFiveSec = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('done');
        // reject('failed');
      }, 5000);
    });

    const { isLoading, isLoaded, result, error, load } = usePromise(
      waitForFiveSec
    );

    console.log('🚀 ~ file: App.jsx ~ line 87 ~ renderPromiseEx ~ isLoading', {
      isLoading,
      isLoaded,
      result,
      error,
    });

    return <button onClick={() => load()}>Promise to come</button>;
  },
};

export default function App() {
  return (
    <div>
      {Object.keys(renderComponents).map((ComponentName, index) => {
        const Component = renderComponents[ComponentName];

        return (
          <section key={ComponentName}>
            <Component key={index} />
            <br></br>
            <hr></hr>
          </section>
        );
      })}
    </div>
  );
}
