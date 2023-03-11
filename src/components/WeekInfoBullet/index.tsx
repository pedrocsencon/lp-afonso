import { Box, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import options from '../../assets/options.png'
import { WeekInfoBulletProps } from "./types";

export default function WeekInfoBullet({ url, text, week }: WeekInfoBulletProps) {
    return (
        <Stack paddingBottom={4} position='relative' alignItems='center'>
            <Flex zIndex={5} alignItems={'flex-end'} width={'90%'} justify='space-between'>
                <Box width={12} height={12}>
                    <Image alt="img" src={url} />
                </Box>
                <Box width={6} height={6}>
                    <Image alt="options" src={options} />
                </Box>
            </Flex>
            <Box marginBottom={4} zIndex={5} width={'90%'}>
                <Text fontSize={'xs'} fontWeight='bold'>
                    Semana {week}:
                </Text>
                <Divider borderColor='orange.500' width={12} borderWidth={2} />
            <Text marginTop={2} fontSize={'sm'} color='black'>{text}</Text>
            </Box>
            <Box shadow={'lg'} width={'100%'} borderRadius={12} height={'95%'} bottom={0} bgColor={'white'} position='absolute'/>
        </Stack>
    )
}