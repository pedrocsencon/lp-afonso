import { Stack, Text } from "@chakra-ui/react";
import { PriceCourseProps } from "./types";

export default function PriceCourse({price, text}: PriceCourseProps){
    return (
        <Stack borderRadius={8} spacing={0} shadow='lg' width={['90%', '85%' ,'75%']} bgColor='gray.100' alignItems='center' textAlign='center' padding={4}>
        <Text fontSize='lg' fontWeight='bold'>
        {text}
    </Text>
    <Text fontWeight='bold' fontSize={['4xl', '4xl', '5xl']} textAlign='center'>
            {price}
        </Text>
        </Stack>
    )
}