import { Button, Stack, Text } from "@chakra-ui/react";
import {useTimer} from 'react-timer-hook'
import {Link} from 'react-scroll'

export default function Timer(){
    const time = new Date('March 19, 2023 23:59:00');
    const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp: time });

    return (
        <Link style={{width: '100%'}} to="cta-efeito" smooth offset={-24}>
        <Stack bgColor={'orange.500'} spacing={[4, 6, 8, 12]} direction='row' width='100%' height={20} alignItems='center' justifyContent='center'>
            <Text textAlign='center' width={[16, 'fit-content', 'fit-content', 'fit-content']} textColor={'white'} fontWeight='extrabold' fontSize={['xs', 'md', '2xl']}>
            ÚLTIMA CHANCE!
            </Text>
            {seconds && minutes && hours && days && (
                <Stack textColor='white'direction={'row'}>
                    <Stack textAlign='center' spacing={0}>
                        <Text fontWeight='extrabold' fontSize={['xx-small', 'md', '2xl']}>
                            {days}
                        </Text>
                        <Text fontSize={['xx-small', 'sm']} fontWeight='bold'>
                            DIAS
                        </Text>
                    </Stack>
                    <Stack textAlign='center' spacing={0}>
                        <Text fontWeight='extrabold' fontSize={['xx-small', 'md', '2xl']}>
                            {hours}
                        </Text>
                        <Text fontSize={['xx-small', 'sm']} fontWeight='bold'>
                            HORAS
                        </Text>
                    </Stack>
                    <Stack textAlign='center' spacing={0}>
                        <Text fontWeight='extrabold' fontSize={['xx-small', 'md', '2xl']}>
                            {minutes}
                        </Text>
                        <Text fontSize={['xx-small', 'sm']} fontWeight='bold'>
                            MINUTOS
                        </Text>
                    </Stack>
                    <Stack textAlign='center' spacing={0}>
                        <Text fontWeight='extrabold' fontSize={['xx-small', 'md', '2xl']}>
                            {seconds}
                        </Text>
                        <Text fontSize={['xx-small', 'sm']} fontWeight='bold'>
                            SEGUNDOS
                        </Text>
                    </Stack>
                </Stack>
            )}
            <Button id='timer-button' size={['xs', 'sm', 'md', 'lg']} flexDir='column'>
                <Text fontWeight='bold' fontSize={['xx-small', 'xs' ,'sm']}>
                GARANTIR
                </Text>
                <Text display={['none', 'initial', 'initial', 'initial',]} fontWeight='bold' fontSize={['xs', 'xs', 'sm']}>
                    AGORA!
                </Text>
            </Button>
        </Stack></Link>
    )
}