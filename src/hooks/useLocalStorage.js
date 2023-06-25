import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const restoredState = localStorage.getItem(key);
    return restoredState ? JSON.parse(restoredState) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
