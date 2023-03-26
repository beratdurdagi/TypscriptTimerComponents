import { StyleSheet, Text as RnText, View ,TextStyle,StyleProp,ViewStyle} from "react-native";
import React from "react";

import useTheme from './../hooks/useTheme';


export  interface IText extends TextStyle{
  children?: React.ReactNode;
  h1?:boolean;
  h2?:boolean;
  h3?:boolean;
  h4?:boolean;
  p?:boolean;
  size?:TextStyle['fontSize']; 
  color?:TextStyle['color'];
  weight?:TextStyle['fontWeight'];
  style?:StyleProp<TextStyle> ;
  align?:TextStyle['textAlign'];
  marginBottom?:ViewStyle['marginBottom'];
 
}

const Text = ({
  children,
  h1,
  h2,
  h3,
  h4,
  p,
  size,
  color,
  weight,
  style,
  align,
  fontSize, // burada fontSize doğru şekilde tanımlanmış
  marginBottom,
  ...props
}: IText) => {
  const {sizes,lineHeights,letter_spacing,colors} = useTheme();
  const textStyle = StyleSheet.flatten([
    { fontSize: sizes.text, lineHeight: lineHeights.text, letterSpacing: letter_spacing.text, color: colors.text },
    h1 !== undefined && { fontSize: sizes.h1, fontFamily:'Roboto-Bold', lineHeight:lineHeights.h1, letterSpacing:letter_spacing.h1 },
    h2 !== undefined && { fontSize: sizes.h2 ,fontWeight:"600", lineHeight:lineHeights.h2, letterSpacing:letter_spacing.h2 },
    h3 !== undefined && { fontSize: sizes.h3, fontFamily:'Roboto-Medium', lineHeight:lineHeights.h3, letterSpacing:letter_spacing.h3},
    h4 !== undefined && { fontSize: sizes.h4,  fontFamily:'Roboto-Regular',lineHeight:lineHeights.h4, letterSpacing:letter_spacing.h4},
    p !== undefined && { fontSize: sizes.p, fontFamily: 'Roboto-Regular',lineHeight:lineHeights.p, letterSpacing:letter_spacing.p },
    align !== undefined && { textAlign: align },
    marginBottom !== undefined && { marginBottom: marginBottom },
    fontSize !== undefined && { fontSize: size }, // burada size yerine fontSize kullanılıyor
    color !== undefined && { color: color },
    weight !== undefined && { fontWeight: weight },
    style,
  ]) as TextStyle;

  return (
    <RnText style={textStyle} {...props}>
      {children}
    </RnText>
  );
};

export default Text;

const styles = StyleSheet.create({});
