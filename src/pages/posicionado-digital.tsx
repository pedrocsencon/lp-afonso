import Head from 'next/head'
import { Box, Button, Flex, Stack, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import illustration from '../assets/illustration.png'
import illustration2 from '../assets/illustration2.png'
import { FaCalendarMinus, FaClock, FaRobot, FaUserAlt, FaUserPlus } from 'react-icons/fa'
import { BsChatFill } from 'react-icons/bs'
import BulletItem from '@/components/BulletItem'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import RegisterModal from '@/components/RegisterModal'

export default function Home() {
  const ButtonMotion = motion(Button)
  const [hover, setHover] = useState<boolean>(false)
  const startHover = useCallback(() => { setHover(true) }, [setHover])
  const endHover = useCallback(() => { setHover(false) }, [setHover])
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan1100] = useMediaQuery("(min-width: 1100px)");

  return (
    <>
      <Head>
        <title>Desafio Posicionado Digital - Afonso Molina</title>
      </Head>
      <Flex direction={isLargerThan1100 ? 'row' : 'column'} paddingBottom={isLargerThan1100 ? 24 : 8} id='background' justifyContent='space-between' backgroundImage="url('../assets/backgrond.png')" width='100%' paddingX={isLargerThan1100 ? 36 : 4} backgroundColor={'white'}>
        <Stack alignItems={isLargerThan1100 ? 'initial' : 'center'} marginLeft={isLargerThan1100 ? 12 : 0} textAlign={isLargerThan1100 ? 'initial' : 'center'} zIndex={999} marginTop={8} spacing={6} width={isLargerThan1100 ? '45%' : '100%'}>
          <Box height={24}>
            <Image alt='logo' src={logo} />
          </Box>
          <Stack paddingY={1} width={['90%', '80%', '60%', '60%']} justifyContent='center' borderRadius={8} borderWidth={2} borderColor='orange.500' direction='row' spacing={2} alignItems='center'>
            <FaCalendarMinus size={12} color='#ff8000' />
            <Text textColor='orange.500' fontSize='md'>4 dias de aulas ao vivo e gratuitas</Text>
          </Stack>
          <Text fontSize='3xl' lineHeight={1.2} fontWeight='bold'>
            Transforme desconhecidos em clientes e alcance a segurança de ter dinheiro entrando na conta todos os dias
          </Text>
          <Stack paddingY={2} width={['90%', '80%', '60%', '60%']} justifyContent='center' borderRadius={8} direction='row' spacing={2} alignItems='center' backgroundColor={'orange.500'}>
            <FaCalendarMinus size={14} color='white' />
            <Text fontWeight='bold' textColor='white'>09 a 12 de março</Text>
            <Text fontWeight='bold' textColor='white'>|</Text>
            <FaClock size={14} color='white' />
            <Text fontWeight='bold' textColor='white'>às 20h</Text>
          </Stack>
          <Stack spacing={4}>
            <Text fontWeight='bold' fontSize={17}>
              Você vai aprender a vender no Instagram:
            </Text>
            <BulletItem Icon={FaUserAlt} text='Sem trabalho adicional' />
            <BulletItem Icon={FaRobot} text='Apesar das mudanças no algoritmo' />
            <BulletItem Icon={BsChatFill} text='Independente da sua concorrência' />
          </Stack>
          {isLargerThan1100 ? (
            <ButtonMotion onClick={onOpen} onHoverStart={startHover} onHoverEnd={endHover} id='anim-bg-gradient' initial={{ backgroundPosition: '0%' }} animate={{ backgroundPosition: ['0%', '150%', '0%'], scale: [1, 1.02, 1] }} transition={{ type: 'spring', repeat: hover ? 'once' : Infinity, duration: 1, repeatDelay: 2, repeatType: "reverse", ease: 'easeInOut' }} size='lg' colorScheme='orange' height={14} width={isLargerThan1100 ? '75%' : '100%'}>
              <Stack direction='row'>
                <FaUserPlus size={18} />
                <Text>Quero aprender</Text>
              </Stack>
            </ButtonMotion>
          )
            :
            <Button onClick={onOpen} id='anim-bg-gradient' size='lg' colorScheme='orange' height={14} width={isLargerThan1100 ? '75%' : '100%'}>
              <Stack direction='row'>
                <FaUserPlus size={18} />
                <Text>Quero aprender</Text>
              </Stack>
            </Button>
          }
        </Stack>
        {isLargerThan1100 ? (
          <Box right={['3rem', '5rem', '10rem']} position='absolute' width={'35rem'}>
            <Image alt='illustration' src={illustration} />
          </Box>
        )
          :
          (
            <Flex marginTop={12} width='100%' alignItems='center' justifyContent='center'>
              <Flex width={'20rem'}>
                <Image alt='illustration' src={illustration2} />
              </Flex>
            </Flex>
          )
        }
      </Flex>
      <Box width='100%' height={12} backgroundColor={'orange.500'} />
      <RegisterModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
