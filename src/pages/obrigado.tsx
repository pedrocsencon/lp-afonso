import { Box, Flex, Heading, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import { RiAlertFill } from 'react-icons/ri'
import alertIcon from '../assets/alert-icon.png'
import emailIcon from '../assets/email-icon.png'
import redAlert from '../assets/red-alert.png'

export default function Obrigado() {
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");

    return (
        <Stack textAlign='center' spacing={6} paddingY={12} id='background' alignItems='center' backgroundImage="url('../assets/backgrond.png')" width='100%' paddingX={isLargerThan900 ? 24 : 4} backgroundColor={'white'}>
            <Text fontSize='lg' fontWeight='bold'>Falta só uma coisa!</Text>
            <Flex width={['95%', '70%', '50%']} paddingY={2} justifyContent='center' alignItems='center' background='orange.500' borderRadius={8}>
                <RiAlertFill size={18} color='white' />
                <Text marginLeft={2} fontWeight='bold' fontSize={['xs', 'md', 'md']} textColor='white'>
                    SUA INSCRIÇÃO AINDA NÃO FOI CONFIRMADA
                </Text>
            </Flex>
            <Text fontSize='lg'>Para garantir sua vaga, basta seguir as instruções abaixo:</Text>
            <Box>
                <Image alt="alert" width={60} src={alertIcon} />
            </Box>
            <Text fontSize='lg'>
                Em breve você receberá um e-mail, para confirmar <strong>é só abrir e clicar no link que te enviei</strong>.
            </Text>
            <Box>
                <Image alt="email" width={60} src={emailIcon} />
            </Box>
            <Text fontSize='lg'>
                A nossa conversa vai acontecer por e-mail, é por lá que te mandarei tudo que você precisa saber sobre o nosso desafio.
            </Text>
            <Text fontSize='2xl' fontWeight='bold'>
                Mas não é só isso!
            </Text>
            <Text fontSize='lg'>
                Já no meu primeiro e-mail eu tenho uma surpresa para você, fique ligado.
            </Text>
            <Stack padding={8} alignItems='center' width={['95%', '70%', '50%']} textAlign='center' backgroundColor='orange.500' borderRadius={12}>
                <Image alt="alert2" width={60} src={redAlert} />
                <Heading textColor='white'>Importante</Heading>
                <Text textColor='white'>
                    As ferramentas de e-mail nem sempre funcionam como deveriam, então é possível que minhas mensagens cheguem na caixa de SPAM.
                </Text>
                <Text textColor='white'>
                    Para evitar isso, salve o meu e-mail como contato.
                </Text>
            </Stack>
        </Stack>
    )
}