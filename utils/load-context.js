import { createContext } from 'react';

export const LoadContext = createContext({
  isLoading: false, 
  setLoading: () => {},
});