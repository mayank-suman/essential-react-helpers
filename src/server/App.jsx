import React from 'react';
import useHover from '../hooks/useHover';

const RenderHoverComp = () => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div>
      <span ref={hoverRef}>{isHovered ? 'hovered' : `hover me`}</span>
    </div>
  );
};

export default function App() {
  return <div>{RenderHoverComp()}</div>;
}
