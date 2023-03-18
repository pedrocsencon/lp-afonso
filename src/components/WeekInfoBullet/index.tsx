import { Box, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import options from '../../assets/options.png'
import { WeekInfoBulletProps } from "./types";

export default function WeekInfoBullet({ url, text, week, pos }: WeekInfoBulletProps) {
    if(pos === 'last'){
        return (
            <Flex position='relative' height={'15rem'}>
                <Stack zIndex={1500} paddingBottom={4} paddingTop={8} height='fit-content' width={'75%'} position='relative' alignItems='center'>
                <Flex zIndex={5} alignItems={'flex-end'}  top={-3} position={'absolute'} width={'90%'} justify='space-between'>
                    <Flex width={12} alignItems='center' justifyContent='center' height={12}>
                        <Image width={60} height={60} alt="img" src={url} />
                    </Flex>
                    <Box width={6} height={6}>
                        <Image  alt="options" src={options} />
                    </Box>
                </Flex>
                <Box marginBottom={4} zIndex={5} width={'90%'}>
                    <Text fontSize={['x-small', 'sm', 'md', 'md']} fontWeight='bold'>
                        Semana {week}:
                    </Text>
                    <Divider borderColor='orange.500' width={12} borderWidth={2} />
                <Text marginTop={2} fontSize={['sm', 'md', 'md', 'lg']} color='black'>{text}</Text>
                </Box>
                <Box shadow={'lg'} width={'100%'} borderRadius={12} height={'100%'} bottom={0} bgColor={'white'} position='absolute'/>
            </Stack>
            </Flex>
        )
       }
    if(pos === 'right'){
    return (
        <Flex position='relative' height={'20rem'}>
            <Stack zIndex={1500} paddingBottom={4} paddingTop={8} height='fit-content' width={'75%'} position='relative' alignItems='center'>
            <Flex zIndex={5} alignItems={'flex-end'}  top={-3} position={'absolute'} width={'90%'} justify='space-between'>
                <Flex width={12} alignItems='center' justifyContent='center' height={12}>
                    <Image width={60} height={60} alt="img" src={url} />
                </Flex>
                <Box width={6} height={6}>
                    <Image  alt="options" src={options} />
                </Box>
            </Flex>
            <Box marginBottom={4} zIndex={5} width={'90%'}>
                <Text fontSize={['x-small', 'sm', 'md', 'md']} fontWeight='bold'>
                    Semana {week}:
                </Text>
                <Divider borderColor='orange.500' width={12} borderWidth={2} />
            <Text marginTop={2} fontSize={['sm', 'md', 'md', 'lg']} color='black'>{text}</Text>
            </Box>
            <Box shadow={'lg'} width={'100%'} borderRadius={12} height={'100%'} bottom={0} bgColor={'white'} position='absolute'/>
        </Stack>
        <Flex right={50} top={75}  position={'absolute'} width={'250px'} height={'250px'} borderColor='white' borderRadius={'md'} borderTopWidth={3} borderRightWidth={3}/>
        </Flex>
    )
   }
   if(pos === 'left'){
    return (
        <Flex justifyContent='right' position='relative' height={'20rem'}>
            <Stack zIndex={1500} paddingBottom={4} paddingTop={8} height='fit-content' width={'75%'} position='relative' alignItems='center'>
            <Flex zIndex={5} alignItems={'flex-end'}  top={-3} position={'absolute'} width={'90%'} justify='space-between'>
                <Flex width={12} alignItems='center' justifyContent='center' height={12}>
                    <Image width={60} height={60} alt="img" src={url} />
                </Flex>
                <Box width={6} height={6}>
                    <Image  alt="options" src={options} />
                </Box>
            </Flex>
            <Box marginBottom={4} zIndex={5} width={'90%'}>
                <Text fontSize={['x-small', 'sm', 'md', 'md']} fontWeight='bold'>
                    Semana {week}:
                </Text>
                <Divider borderColor='orange.500' width={12} borderWidth={2} />
            <Text marginTop={2} fontSize={['sm', 'md', 'md', 'lg']} color='black'>{text}</Text>
            </Box>
            <Box shadow={'lg'} width={'100%'} borderRadius={12} height={'100%'} bottom={0} bgColor={'white'} position='absolute'/>
        </Stack>
        <Flex left={50} top={75}  position={'absolute'} width={'250px'} height={'250px'} borderColor='white' borderRadius={'md'} borderTopWidth={3} borderLeftWidth={3}/>
        </Flex>
    )
   }
   return <></>
}