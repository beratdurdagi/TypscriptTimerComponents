import { ColorValue, StyleSheet } from "react-native";


export interface ISpacing{
  xs:number;
  s:number;
  sm:number;
  m:number;
  md:number;
  l:number;
  xl:number;
  xxl:number;

}

export interface ISizes{
  base: number;
    text: number;
    padding: number;

    //text size

    h1: number;
    h2: number;
    h3: number;
    h4: number;
    p: number;
    small: number;

    //button sizes
    buttonHeight?: number;
    buttonRadius?: number;
    buttonBorder?: number;

    //Input size

    inputHeight?: number;
    inputRadius?: number;
    inputBorder?: number;

}

export interface ILineHeights{
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  p: number;
  text:number;
  small: number;
}

export interface ILETTERSPACING{
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  p: number;
  text:number;
  small: number;
}

export interface IColors{
 
    primary: ColorValue
    secondary: ColorValue
    tertiary: ColorValue
    black: ColorValue;
    error: ColorValue;
    warning: ColorValue
    success: ColorValue
    white: ColorValue;
    text: ColorValue;
    buttonColor:ColorValue
    inputColor: ColorValue
  
}
export interface ITheme {
  sizes: ISpacing & ISizes;
  colors: IColors,
  lineHeights: ILineHeights;
  letter_spacing: ILETTERSPACING;
};

const TEXT_SIZE=16
export const SIZES = {
  //common sizes
  base: 8,
  text: TEXT_SIZE,
  padding: 24,

  //text sizes

  h1: TEXT_SIZE + (2 * 12),
  h2: TEXT_SIZE + (2 * 4),
  h3: TEXT_SIZE + (2 *3),
  h4: TEXT_SIZE + (2 * 3),
  p: TEXT_SIZE+ (2 * 1),
  small: TEXT_SIZE + -2,

  //button sizes
  buttonHeight: 48,
  buttonRadius: 8,
  buttonBorder: 1,

  //Input sizes

  inputHeight: 48,
  inputRadius: 8,
  inputBorder: StyleSheet.hairlineWidth,
}  ;

export const SPACING = {
  xs: SIZES.base / 2, //4
  s: SIZES.base, // 8
  sm: SIZES.base * 1.5, //12
  m: SIZES.base * 2, //16
  md: SIZES.base * 2.5, //20
  l: SIZES.base * 3, //24
  xl: SIZES.base * 3.5, //28
  xxl: SIZES.base * 4, //32
};

export const LINE_HEIGHTS={
 h1:Math.round(SIZES.h1*1.3),
 h2:Math.round(SIZES.h2*1.3),
  h3:Math.round(SIZES.h3*1.3) ,
 h4:Math.round(SIZES.h4*1.3),
 p: Math.round(SIZES.p*1.3),
 text:Math.round(SIZES.text*1.3),
small: Math.round(SIZES.small*1.3),
}

export const LETTER_SPACİNG={
  h1:-(SIZES.h1*0.03),
  h2:-(SIZES.h2*0.03),
   h3:-(SIZES.h3*0.03),
  h4:-(SIZES.h4*0.03),
  p:0,
text:0,
small:0,
 }


export const COLORS = {
  primary: "#3E8EF4",
  secondary: "#FD9900",
  tertiary: "#FE9EF4",
  success:'#64BC26',
  warning:'#FF9940',
  error:'#FD2010',
  text:'#14191F',



  buttonColor: "rgba(0,0,0,0.5)",

  inputColor: "rgba(0,0,0,0.3)",

  black: "#000",
  white: "#FFFFFF",
};

export const THEME: ITheme = {
  sizes:{...SIZES,...SPACING},
  colors:{...COLORS},
  lineHeights:LINE_HEIGHTS,
  letter_spacing:LETTER_SPACİNG


};

export default THEME;
