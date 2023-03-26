import { TouchableOpacity, View ,StyleSheet,TouchableOpacityProps,ViewStyle,StyleProp} from "react-native";
import React from "react";
import useTheme from "../hooks/useTheme";

interface IButton extends TouchableOpacityProps{
  children?: React.ReactNode;

  borderWidth?:ViewStyle["borderWidth"]
  width?:ViewStyle["width"];
  height?:ViewStyle["height"];
  color?: ViewStyle["backgroundColor"];
  justify?: ViewStyle["justifyContent"];
  align?: ViewStyle["alignItems"];
  radius ?:ViewStyle['borderRadius'];
  padding?:ViewStyle['padding'];
  paddingTop?:ViewStyle['paddingTop'];
  paddingBottom?:ViewStyle['paddingBottom'];
  paddingVertical?:ViewStyle['paddingVertical'];
  paddingHorizontal?:ViewStyle['paddingHorizontal'];
  paddingLeft?:ViewStyle['paddingLeft'];
  paddingRight?:ViewStyle['paddingRight'];
  margin?:ViewStyle['margin'];
  marginHorizontal?:ViewStyle['marginHorizontal'];
  marginVertical?:ViewStyle['marginVertical'];
  marginTop?:ViewStyle['marginTop'];
  marginBottom?:ViewStyle['marginBottom'];
  marginRight?:ViewStyle['marginRight'];
  marginLeft?:ViewStyle['marginLeft'];
  borderColor?:ViewStyle['borderColor'];
  style?:StyleProp<ViewStyle> ;

}

const Button = ({
  justify,
  align,
  height,
  width,
  borderWidth,
  children,
  color,
  style,
  radius,
  padding,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  margin,
  marginHorizontal,
  marginVertical,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  borderColor,
  ...props
}:IButton)=> {
  const {sizes,colors} =useTheme();

 
  const buttonStyle = StyleSheet.flatten([
    borderWidth!=undefined && {borderWidth:borderWidth},
    width!=undefined && {width:width},
    height!=undefined && {height:height},
    align!==undefined &&{alignItems:align},
    justify!==undefined &&{justifyContent:justify},
    borderColor!==undefined &&{borderColor:borderColor},
    color !== undefined && { backgroundColor: color },
    radius !== undefined && { borderRadius: radius },
    padding !== undefined && { padding },
    paddingHorizontal  !== undefined && { paddingHorizontal },
    paddingVertical  !== undefined && { paddingVertical },
    paddingTop  !== undefined && { paddingTop },
    paddingBottom  !== undefined && { paddingBottom },
    paddingRight  !== undefined && { paddingRight },
    paddingLeft  !== undefined && { paddingLeft },
    margin !=undefined && {margin},
    marginHorizontal !=undefined && {marginHorizontal},
    marginVertical !=undefined && {marginVertical},
    marginTop !=undefined && {marginTop},
    marginBottom !=undefined && {marginBottom},
    marginLeft !=undefined && {marginLeft},
    marginRight !=undefined && {marginRight},

    style,
  ]) as ViewStyle;
  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
