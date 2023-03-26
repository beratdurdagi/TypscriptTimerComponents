import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useState, FC, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Block, Button, Text } from "./components";
import TimerCountDown from "./TimerCountDown";
import TimerToggleButton from "./TimerToggleButton";
import useTheme from './hooks/useTheme';
import { TimerModeDisplay, TimerModes } from "./TimerModeDisplay";

const App: FC = () => {


  const FOCUS_TIME_MINUTES = 0.2 * 60 * 1000;
  const BREAK_TIME_MINUTES = 0.1 * 60 * 1000;
  const [timerCount, setTimerCount] = useState<number>(FOCUS_TIME_MINUTES);
  const [timerInterval,setTimerInterval]=useState<NodeJS.Timer | null >(null);
  const[isStart,setIsStart]=useState<boolean>(false)
  const [timerMode,setTimerMode]=useState<TimerModes>('Focus')
  

 

  const [loaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  useEffect(() => {
    if (!loaded) {
      loadFonts();
    }
  }, [loaded]);


  useEffect(()=>{
    if(timerCount===0){
      if(timerMode=='Focus'){
        setTimerMode('Break')
        setTimerCount(BREAK_TIME_MINUTES)
  
      }
      
      else{
        setTimerMode('Focus')
        setTimerCount(FOCUS_TIME_MINUTES)
      }
    }
   
  
    },[timerCount])
  
  

  const loadFonts = async () => {
    await useFonts({
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
      "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    });
  };

  if (!loaded) {
    return null;
  }

  const startStimer=()=>{
    const id=setInterval(()=>setTimerCount((prev)=>prev-1000 ),1000)
    setTimerInterval(id);
    setIsStart(true);
   
  }
  const stopTimer=()=>{
    if (timerInterval!=null){
      clearInterval(timerInterval)
    }
    setIsStart(false);
  
   
  }


  const {colors} =useTheme()
  return (
 
    <Block color={timerMode=='Focus' ? colors.secondary : colors.primary } style={styles.container}>
      <StatusBar style="auto" />

    <TimerModeDisplay timerMode={timerMode}/>
     <TimerToggleButton isStart={isStart} stopTimer={stopTimer} startStimer={startStimer}/>
      <TimerCountDown timerDate={new Date(timerCount)}/>
      <StatusBar style="auto" />
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
``
