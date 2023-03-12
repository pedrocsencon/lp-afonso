import { Stack, Text } from "@chakra-ui/react";
import {useTimer} from 'react-timer-hook'

export default function Timer(){
    const time = new Date('March 19, 2023 23:59:00');
    const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp: time });

    return (
        <Stack bgColor={'orange.500'} spacing={1} direction='row' width='100%' height={16} alignItems='center' justifyContent='center'>
            <Text textColor={'white'} fontSize={['xs', 'md', 'lg']}>
            O evento termina em:
            </Text>
            {seconds && minutes && hours && days && (
            <Text textColor={'white'} fontWeight='extrabold' fontSize={['xs', 'md', 'lg']}>
                {days} dias, {hours} horas {minutes} min {seconds} seg
            </Text>
            )}
           
        </Stack>
    )
}