import { useEffect, useState, useRef } from 'react';

export default function useDebounce({ delay = 500 } = {}) {
  const elementRef = useRef(null);
  const [debounceValue, setDebounceValue] = useState('');

  useEffect(() => {
    let timer;
    const { current: currentElement } = elementRef;
    if (currentElement) {
      currentElement.oninput = () => {
        timer = setTimeout(() => {
          const value = currentElement?.value;
          setDebounceValue(value);
        }, delay);
      };
      return clearTimeout(timer);
    }
  }, [elementRef.current]);

  return [elementRef, debounceValue];
}
