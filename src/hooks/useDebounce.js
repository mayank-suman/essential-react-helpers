import React, { useEffect, useRef, useState } from 'react';

export default function useDebounce(value) {
  // const elementRef = useRef(null);
  const [debouncedValue, setValue] = useState(value);

  useEffect(() => {
    setTimeout(setValue(), 500);
    console.log('effect running');
  }, [debouncedValue]);

  return [debouncedValue];
}
