import { StyleSheet, } from 'react-native'
import React,{FC} from 'react'
import { Block, Text } from './components';
import useTheme from './hooks/useTheme';

type Props={
    timerDate:Date;
}

const TimerCountDown:React.FC<Props> = ({timerDate}) => {
  const {colors}=useTheme()
  return (
    <Block align='center' justify='center'>
      <Text h1 color={colors.white}>{timerDate.getMinutes().toString().padStart(2,'0')} : {timerDate.getSeconds().toString().padStart(2,'0')}</Text>

    </Block>
  )
}

export default TimerCountDown;

const styles = StyleSheet.create({})