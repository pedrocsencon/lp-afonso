import { Box, Stack, Text } from "@chakra-ui/react";
import { BulletItemProps } from "./types";

export default function BulletItem({Icon, text}: BulletItemProps){
    return(
        <Stack spacing={2} direction='row' alignItems='center'>
        <Icon color="#ff8000" size={20} />
        <Box height={'100%'} width={1} borderRadius={1} backgroundColor='orange.500'/>
        <Text fontSize={'lg'}>
          {text}
        </Text>
      </Stack>
    )
}