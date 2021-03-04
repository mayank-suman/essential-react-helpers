import { useEffect, useState, useRef } from 'react';

function useHover() {
  const hoverEleRef = useRef(null);
  const [isHovered, setHover] = useState(false);
  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  useEffect(() => {
    const { current: currentElement } = hoverEleRef;

    if (currentElement) {
      currentElement.addEventListener('mouseover', handleMouseOver);
      currentElement.addEventListener('mouseout', handleMouseOut);

      return () => {
        currentElement.removeEventListener('mouseover', handleMouseOver);
        currentElement.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [hoverEleRef.current]);

  return [hoverEleRef, isHovered];
}

export default useHover;
