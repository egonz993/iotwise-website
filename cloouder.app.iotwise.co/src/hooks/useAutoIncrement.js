import { useState, useEffect } from 'react';

export const useAutoIncrement = (value) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(increment, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return counter;
};