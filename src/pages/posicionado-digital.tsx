import Head from 'next/head'
import { Box, Button, Flex, Stack, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import illustration from '../assets/illustration.png'
import {FaCalendarMinus, FaClock, FaRobot, FaUserAlt, FaUserPlus} from 'react-icons/fa'
import {BsChatFill} from 'react-icons/bs'
import BulletItem from '@/components/BulletItem'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import RegisterModal from '@/components/RegisterModal'
import { LPMetaPixel } from '@/components/Pixels/LPMetaPixel'

export default function Home() {
  const ButtonMotion = motion(Button)
  const [hover, setHover] = useState<boolean>(false)
  const startHover = useCallback(()=>{setHover(true)},[setHover])
  const endHover = useCallback(()=>{setHover(false)},[setHover])
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [isLargerThan1100] = useMediaQuery("(min-width: 1100px)");

  return (
    <>
    <LPMetaPixel/>
    <Head>
    <title>Desafio Posicionado Digital - Afonso Molina</title>
    </Head>
      <Flex height={isLargerThan1100 ? '100vh' : 'auto'} paddingBottom={12} id='background' justifyContent='space-between' backgroundImage="url('../assets/backgrond.png')" width='100%' paddingX={isLargerThan1100 ? 24 : 4} backgroundColor={'white'}>
          <Stack alignItems={isLargerThan1100 ? 'initial' : 'center'} textAlign={isLargerThan1100 ? 'initial' : 'center'} zIndex={999} marginTop={12} spacing={6} width={isLargerThan1100 ? '50%' : '100%'}>
            <Box height={24}>
            <Image alt='logo' src={logo}/>
            </Box>
            <Stack paddingY={1} width={['90%', '80%','60%' ,'50%']} justifyContent='center' borderRadius={8} background='orange.500' direction='row' spacing={2} alignItems='center'>
              <FaCalendarMinus size={12} color='white'/>
              <Text textColor='white' fontSize='sm'>4 dias de aulas ao vivo e gratuitas</Text>
            </Stack>
            <Text fontSize='3xl' lineHeight={1.2} fontWeight='bold'>
            Transforme desconhecidos em clientes e alcance a segurança de ter dinheiro entrando na conta todos os dias
            </Text>
            <Stack paddingY={2} width={['90%', '80%','60%' ,'50%']} justifyContent='center' borderRadius={8} borderWidth={2} borderColor='orange.500' direction='row' spacing={2} alignItems='center'>
              <FaCalendarMinus size={14} color='#ff8000'/>
              <Text textColor='orange.500'>09 a 12 de março</Text>
              <Text textColor='orange.500'>|</Text>
              <FaClock size={14} color='#ff8000'/>
              <Text textColor='orange.500'>às 20h</Text>
            </Stack>
            <Stack spacing={4}>
            <Text fontWeight='semibold'>
              Você vai aprender a vender no Instagram:
            </Text>
             <BulletItem Icon={FaUserAlt} text='Sem trabalho adicional'/>
             <BulletItem Icon={FaRobot} text='Apesar das mudanças no algoritmo'/>
             <BulletItem Icon={BsChatFill} text='Independente da sua concorrência'/>
            </Stack>
              <ButtonMotion onClick={onOpen} onHoverStart={startHover} onHoverEnd={endHover} id='anim-bg-gradient' initial={{backgroundPosition: '0%'}} animate={{backgroundPosition: ['0%', '150%', '0%'], scale: [1, 1.02, 1]}} transition={{ type: 'spring', repeat: hover ? 'once' : Infinity, duration: 1, repeatDelay: 2, repeatType: "reverse", ease: 'easeInOut' }} size='lg' colorScheme='orange' width='75%'>
              <Stack direction='row'>
              <FaUserPlus size={18}/>
              <Text>Quero aprender</Text>
              </Stack>
            </ButtonMotion>
          </Stack>
         {isLargerThan1100 && (
           <Box right={'3rem'} position='absolute' width={'35rem'}>
           <Image  alt='illustration' src={illustration}/>
           </Box>
         )}
      </Flex>
      {isLargerThan1100 && <Box width='100%' height={24} backgroundColor={'orange.500'}/>}
      <RegisterModal isOpen={isOpen} onClose={onClose}/>
    </>
  )
}
