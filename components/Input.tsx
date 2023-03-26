import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
} from "react-native";
import React from "react";
import useTheme from './../hooks/useTheme';

interface IInput extends TextInputProps {
 
  secure?:boolean
  margin?: TextStyle["margin"];
  marginHorizontal?: TextStyle["marginHorizontal"];
  marginVertical?: TextStyle["marginVertical"];
  marginTop?: TextStyle["marginTop"];
  marginBottom?: TextStyle["marginBottom"];
  marginRight?: TextStyle["marginRight"];
  marginLeft?: TextStyle["marginLeft"];
  padding?: TextStyle["padding"];
  paddingTop?: TextStyle["paddingTop"];
  paddingBottom?: TextStyle["paddingBottom"];
  paddingVertical?: TextStyle["paddingVertical"];
  paddingHorizontal?: TextStyle["paddingHorizontal"];
  paddingLeft?: TextStyle["paddingLeft"];
  borderWidth?: TextStyle["borderWidth"];
  paddingRight?: TextStyle["paddingRight"];
  style?: StyleProp<TextStyle>;
}

const Input = ({
  
  secure,
  children,
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
  borderWidth,
  style,
  ...props
}: IInput) => {
  const {sizes,colors}=useTheme()
  const inputStyle = StyleSheet.flatten([
    {height:sizes.inputHeight,
    borderRadius:sizes.inputRadius,
    borderWidth:sizes.inputBorder,
  paddingHorizontal:sizes.base,
borderColor:colors.inputColor,
},
    
    margin != undefined && { margin },
    marginHorizontal != undefined && { marginHorizontal },
    marginVertical != undefined && { marginVertical },
    marginTop != undefined && { marginTop },
    marginBottom != undefined && { marginBottom },
    marginLeft != undefined && { marginLeft },
    marginRight != undefined && { marginRight },
    padding !== undefined && { padding },
    paddingHorizontal !== undefined && { paddingHorizontal },
    paddingVertical !== undefined && { paddingVertical },
    paddingTop !== undefined && { paddingTop },
    paddingBottom !== undefined && { paddingBottom },
    paddingRight !== undefined && { paddingRight },
    paddingLeft !== undefined && { paddingLeft },
    style,
  ]) as TextStyle;
  return (
    <TextInput  secureTextEntry={secure} style={inputStyle} {...props}>
      {children}
    </TextInput>
  );
};

export default Input;
