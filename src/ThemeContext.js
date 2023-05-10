import React, { useState } from 'react'
import { useContext } from 'react';

const  ThemeContext = React.createContext({})

export const ThemeProvider = ({children}) => {
  
  const T_KEY = 'theme';
  const getInitialTheme = () => {
    return localStorage.getItem(T_KEY) ?? 'light';
  }
  const [ theme, setTheme ] = useState(getInitialTheme);

  const handleTheme = (value) => {
    localStorage.setItem(T_KEY, value);
    setTheme(value);
  }

  return(
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: handleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);