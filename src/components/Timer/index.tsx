import { Button, Stack, Text } from "@chakra-ui/react";
import {useTimer} from 'react-timer-hook'
import {Link} from 'react-scroll'
import { useMemo } from "react";
import { goTo } from "@/utils";

export default function Timer(){
    const time = new Date('March 19, 2023 23:59:00');
    const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp: time });
   
    function formatTime(time: number) {
        if(time < 10){
            return `0${time}`
        }
        return time
      }
      
    return (
        <Stack bgColor={'orange.500'} padding={4} spacing={[4, 6, 8, 12]} direction={['column', 'row' ,'row' ,'row']} width='100%' alignItems='center' justifyContent='center'>
            <Text textAlign='center' textColor={'white'} fontWeight='extrabold' fontSize={['2xl', 'md', '2xl']}>
            ÚLTIMA CHANCE!
            </Text>
                <Stack spacing={4} textColor='white'direction={'row'}>
                    <Stack textAlign='center' spacing={0}>
                        <Text fontWeight='extrabold' fontSize={['2xl', 'md', '2xl']}>
                            {formatTime(days)}
                        </Text>
                        <Text fontSize={['xx-small', 'sm']} fontWeight='bold'>
                            DIAS
                        </Text>
                    </Stack>
                    <Stack textAlign='center' spacing={0}>
                        <Text fontWeight='extrabold' fontSize={['2xl', 'md', '2xl']}>
                            {formatTime(hours)}
                        </Text>
                        <Text fontSize={['xx-small', 'sm']} fontWeight='bold'>
                            HORAS
                        </Text>
                    </Stack>
                    <Stack textAlign='center' spacing={0}>
                        <Text fontWeight='extrabold' fontSize={['2xl', 'md', '2xl']}>
                            {formatTime(minutes)}
                        </Text>
                        <Text fontSize={['xx-small', 'sm']} fontWeight='bold'>
                            MINUTOS
                        </Text>
                    </Stack>
                    <Stack textAlign='center' spacing={0}>
                        <Text fontWeight='extrabold' fontSize={['2xl', 'md', '2xl']}>
                            {formatTime(seconds)}
                        </Text>
                        <Text fontSize={['xx-small', 'sm']} fontWeight='bold'>
                            SEGUNDOS
                        </Text>
                    </Stack>
                </Stack>
            <Button onClick={()=>{
                goTo('https://pay.kiwify.com.br/6LeuLKG')
            }} colorScheme={'whatsapp'} size={'lg'} flexDir='column'>
                GARANTIR AGORA!
            </Button>
        </Stack>
    )
}