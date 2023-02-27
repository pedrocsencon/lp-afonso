import Head from 'next/head'
import { Box, Button, Divider, Flex, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import illustration from '../assets/illustration.png'
import {FaCalendarMinus, FaClock, FaRobot, FaUserAlt, FaUserPlus} from 'react-icons/fa'
import {BsChatFill} from 'react-icons/bs'
import BulletItem from '@/components/BulletItem'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'

export default function Home() {
  const ButtonMotion = motion(Button)
  const [hover, setHover] = useState<boolean>(false)

  const startHover = useCallback(()=>{setHover(true)},[setHover])
  const endHover = useCallback(()=>{setHover(false)},[setHover])

  return (
    <>
      <Head>
        <title>Grupo iSafety - Segurança no trabalho</title>
        <meta
          name="description"
          content="Descubra um novo jeito de aprender sobre segurança no trabalho e muito mais."
        />
        <meta name="author" content="Grupo iSafety" />
        <meta name="keywords" content="Next.JS, Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="cache-control" content="public" />
        <meta name="copyright" content="© 2023 iSafety" />
        <meta name="generator" content="Next.JS" />
        <meta name="rating" content="general" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Outfit:wght@300;400;700&display=swap" rel="stylesheet" />

      </Head>
      <Flex marginBottom={12} id='background' justifyContent='center' backgroundImage="url('../assets/backgrond.png')" width='100%' paddingX={12} backgroundColor={'white'}>
          <Stack marginTop={12} spacing={6} width={'50%'}>
            <Box height={24}>
            <Image alt='logo' src={logo}/>
            </Box>
            <Stack paddingY={1} width={['90%', '70%', '80%','50%']} justifyContent='center' borderRadius={8} background='orange.500' direction='row' spacing={2} alignItems='center'>
              <FaCalendarMinus size={12} color='white'/>
              <Text textColor='white' fontSize='sm'>4 dias de aulas ao vivo e gratuitas</Text>
            </Stack>
            <Text fontSize='3xl' lineHeight={1.2} fontWeight='bold'>
            Transforme desconhecidos em clientes e alcance a segurança de ter dinheiro entrando na conta todos os dias
            </Text>
            <Stack paddingY={2} width='50%' justifyContent='center' borderRadius={8} borderWidth={2} borderColor='orange.500' direction='row' spacing={2} alignItems='center'>
              <FaCalendarMinus size={14} color='#ff8000'/>
              <Text textColor='orange.500'>01 a 02 de março</Text>
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
            <ButtonMotion onHoverStart={startHover} onHoverEnd={endHover} id='anim-bg-gradient' initial={{backgroundPosition: '0%'}} animate={{backgroundPosition: ['0%', '150%', '0%'], scale: [1, 1.02, 1]}} transition={{ type: 'spring', repeat: hover ? 'once' : Infinity, duration: 1, repeatDelay: 2, repeatType: "reverse", ease: 'easeInOut' }} size='lg' colorScheme='orange' width='75%'>
              <Stack direction='row'>
              <FaUserPlus size={18}/>
              <Text>Quero aprender</Text>
              </Stack>
            </ButtonMotion>
          </Stack>
          <Box width={'45%'}>
          <Image  alt='illustration' src={illustration}/>
          </Box>
      </Flex>
      <Box width='100%' height={24} backgroundColor={'orange.500'}/>
    </>
  )
}
