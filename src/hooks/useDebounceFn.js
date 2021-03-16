import { useEffect, useState, useRef } from 'react';

export default function useDebounce({ delay = 500 } = {}) {
  const elementRef = useRef(null);
  const [debounceFn, setDebounceFn] = useState(() => () => {});

  useEffect(() => {
    console.log('running');
    const { current: currentElement } = elementRef;
    if (currentElement) {
      currentElement.oninput = () => {
        const timeout = setTimeout(() => {
          setDebounceFn(() => (val) => val);
        }, delay);
      };
    }
  }, [elementRef.current]);

  return [elementRef, debounceFn];
}
