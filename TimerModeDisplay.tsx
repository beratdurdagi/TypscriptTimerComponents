import React from "react";
import { Block, Text } from "./components";

import useTheme from './hooks/useTheme';

export type TimerModes='Focus' | 'Break';

type Props={
    timerMode:TimerModes;
}

export const TimerModeDisplay:React.FC<Props>=({timerMode})=>{
    const {colors,sizes}=useTheme()
    return(
        <Block align="center" justify="center" width={'100%'}>
        <Text color={colors.white} h1>{timerMode==='Focus' ? 'Time To Focus':'Time to break' }</Text>
    </Block>
)
}


