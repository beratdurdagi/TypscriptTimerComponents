import { StyleSheet } from "react-native";
import React from "react";
import { Block, Text, Button } from "./components";
import { FontAwesome } from "@expo/vector-icons";
import useTheme from "./hooks/useTheme";

type Props = {
  isStart: boolean;
  stopTimer: () => void;
  startStimer: () => void;

};

const TimerToggleButton: React.FC<Props> = ({
  isStart,
  stopTimer,
  startStimer,

}) => {
  const { colors } = useTheme();
  return (
    <Button
      height={250}
      width={250}
      radius={250 / 2}
      borderWidth={5}
      align="center"
      justify="center"
      borderColor={colors.white}
    marginBottom={50}
    marginTop={40}
      activeOpacity={0.1}
      onPress={isStart ? stopTimer : startStimer}
    >
      <Block  >
        <FontAwesome
          name={isStart ? "pause" : "play"}
          size={125}
          color={colors.white}
          style={{ alignSelf: "center" }}
        />
      </Block>
    </Button>
  );
};

export default TimerToggleButton;

const styles = StyleSheet.create({});
