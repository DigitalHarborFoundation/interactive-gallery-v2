import { useState, useEffect } from 'react';

export function useKeyPress(targetKey) {
  // hook recipe from https://usehooks.com/useKeyPress!
  const [keyPressed, setKeyPressed] = useState(false);

  function keyDownHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  function keyUpHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
    };
  }, []);
  return keyPressed;
}
