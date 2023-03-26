import React,{createContext} from "react";

import appTheme,{ITheme} from '../constants/theme';


interface IThemeHook {
  children?: React.ReactNode;
  theme?: ITheme;}
  

export const ThemeContext=React.createContext({
  theme:appTheme,
})


  

export const ThemeProvider = ({ children, theme = appTheme}: IThemeHook) => {


  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  );
};

export default function useTheme():ITheme{
    const {theme}=React.useContext(ThemeContext);
    return theme;
}
