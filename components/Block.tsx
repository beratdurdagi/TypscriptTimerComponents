import { StyleProp, StyleSheet, Text, View, ViewProps, ViewStyle } from "react-native";
import React from "react";

export interface IBlock extends ViewProps {
  borderWidth?:ViewStyle["borderWidth"]
  width?:ViewStyle["width"];
  height?:ViewStyle["height"];
  children?: React.ReactNode;
  flex?: ViewStyle["flex"];
  row?: ViewStyle["flexDirection"];
  radius?: ViewStyle["borderRadius"];
  color?: ViewStyle["backgroundColor"];
  align?: ViewStyle["alignItems"];
  justify?: ViewStyle["justifyContent"];
  margin?:ViewStyle['margin'];
  marginHorizontal?:ViewStyle['marginHorizontal'];
  marginVertical?:ViewStyle['marginVertical'];
  marginTop?:ViewStyle['marginTop'];
  marginBottom?:ViewStyle['marginBottom'];
  marginRight?:ViewStyle['marginRight'];
  marginLeft?:ViewStyle['marginLeft'];
  padding?:ViewStyle['padding'];
  paddingTop?:ViewStyle['paddingTop'];
  paddingBottom?:ViewStyle['paddingBottom'];
  paddingVertical?:ViewStyle['paddingVertical'];
  paddingHorizontal?:ViewStyle['paddingHorizontal'];
  paddingLeft?:ViewStyle['paddingLeft'];
  paddingRight?:ViewStyle['paddingRight'];
  style?:StyleProp<ViewStyle> ;


}

const Block = ({
  borderWidth,
  width,
  height,
  radius,
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
  flex,
  row,
  color,
  align,
  justify,

  style,
  ...props
}: IBlock) => {
  const blockStyle = StyleSheet.flatten([
    width!=undefined && {width:width},
    borderWidth!=undefined && {borderWidth:borderWidth},
    height!=undefined && {height:height},
    radius!=undefined && {borderRadius:radius},
    flex !== undefined && { flex },
    row !== undefined && { flexDirection: "row" },
    color !== undefined && { backgroundColor: color },
    align !== undefined && { alignItems: align },
    justify !== undefined && { justifyContent: justify },
    margin !=undefined && {margin},
    marginHorizontal !=undefined && {marginHorizontal},
    marginVertical !=undefined && {marginVertical},
    marginTop !=undefined && {marginTop},
    marginBottom !=undefined && {marginBottom},
    marginLeft !=undefined && {marginLeft},
    marginRight !=undefined && {marginRight},
    padding !== undefined && { padding },
    paddingHorizontal  !== undefined && { paddingHorizontal },
    paddingVertical  !== undefined && { paddingVertical },
    paddingTop  !== undefined && { paddingTop },
    paddingBottom  !== undefined && { paddingBottom },
    paddingRight  !== undefined && { paddingRight },
    paddingLeft  !== undefined && { paddingLeft },
    
    style,
  ]) as ViewStyle;
  return (
    <View style={blockStyle} {...props}>
      {children}
    </View>
  );
};

export default Block;

const styles = StyleSheet.create({});
