import { useEffect, useState } from 'react';

export default function useTimeout(value, { delay = 500 } = {}) {
  const [timeoutValue, setValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(value);
    }, delay);
  }, [value]);

  return [timeoutValue];
}
