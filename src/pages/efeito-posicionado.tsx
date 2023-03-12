import { Box, Button, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import afonsod1 from '../assets/afonso-d1.png'
import logo from '../assets/logo-posicionado.png'
import messenger from '../assets/messenger-icon.png'
import popup1 from '../assets/popup1.png'
import popup2 from '../assets/popup2.png'
import popup6 from '../assets/popup6.png'
import popup4 from '../assets/popup4.png'
import popup5 from '../assets/popup5.png'
import brain from '../assets/brain.png'
import comunicacao from '../assets/comunicacao.png'
import gpt from '../assets/gpt.png'
import anuncios from '../assets/anuncios.png'
import instagram from '../assets/instagram.png'
import graph from '../assets/graph.png'
import boxUser from '../assets/box-user.png'
import bounty from '../assets/bounty.png'
import chevron from '../assets/chevrons-down.svg'
import selo from '../assets/selo.png'
import shakeHand from '../assets/shake-hand.png'
import starEmoji from '../assets/star-emoji.png'
import afonsoCelular from '../assets/afonso-celular.png'
import WeekInfoBullet from "@/components/WeekInfoBullet";
import PriceCourse from "@/components/PriceCourse";
import FAQ from "@/components/FAQ";
import Timer from "@/components/Timer";
import options from '../assets/options.png'
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { goTo } from "@/utils";
import Head from "next/head";

export default function EfeitoPosicionado() {
    const StackMotion = motion(Stack)
    const ButtonMotion = motion(Button)
    const [hover, setHover] = useState<boolean>(false)
    const startHover = useCallback(() => { setHover(true) }, [setHover])
    const endHover = useCallback(() => { setHover(false) }, [setHover])

    return (
      
      <>
      <Head>
        <title>Efeito Posicionado - Afonso Molina</title>
      </Head>
        <Stack spacing={0}  width={'100%'} alignItems='center'>
            <Flex paddingBottom={12} height={['fit-content', 'fit-content', 'fit-content', '90vh']} id='background' position={'relative'} direction={['column', 'column', 'column', 'row']} width={['100%', '95%', '90%', '90%']} alignItems={'center'} justify={['center', 'center', 'initial']}>
                <Box position={['relative', 'relative', 'relative', 'absolute']} right={['initial', 'initial', 'initial', '5%']} width={['100%', '80%', '70%', '60%']} zIndex={-2}>
                    <Image alt="afonsod1" src={afonsod1} />
                </Box>
                <Stack spacing={[4, 4, 6]} marginTop={4} marginLeft={[0, 0, 0, 24]} alignItems={['center', 'center', 'center', 'initial']} textAlign={['center', 'center', 'center', 'initial']} width={['100%', '80%', '60%', '50%']}>
                    <Box marginTop={8} width={['70%', '60%', '40%']}>
                        <Image alt="afonsod1" src={logo} />
                    </Box>
                    <Stack spacing={0} width='90%'>
                        <Text letterSpacing={0.5} fontSize={['22px', 'xl', '3xl']} lineHeight={1.2} fontWeight='extrabold'>
                        7 semanas para transformar o seu negócio: Domine o Instagram, conquiste milhares de seguidores e venda muito todo dia
                        </Text>
                    </Stack>
                        <Text fontSize={['md', 'sm', 'lg']} width={['90%', '95%', '95%', '70%']}>
                        <Text as='span' textDecor='underline'>Viralização, explosão de seguidores, visibilidade, autoridade, reconhecimento e vendas;</Text> Essa mentoria de 7 semanas vai te ensinar o passo a passo para que você se posicione e alcance o sucesso no digital
                        </Text>
                    <StackMotion display={['none', 'none', 'none', 'flex']} animate={{ y: [0, -2, 2, 0] }} transition={{ type: "spring", stiffness: 100, delay: 0.2, duration: 1, repeat: Infinity }} direction='row' alignItems='center'>
                        <Image alt="chevron" src={chevron}/>
                        <Text textColor='orange.500'>Role para baixo para saber mais</Text>
                    </StackMotion>
                </Stack>
            </Flex>
            <Stack spacing={6} marginTop={[0, 0, 0, 24]} textAlign={'center'} width={'100%'} alignItems='center' padding={2} backgroundColor='#f3f3f3'>
                <Text paddingTop={4} fontSize={['xl', 'xl', '2xl', '4xl']} fontWeight='bold'>
                    Tudo pode mudar em 7 semanas
                </Text>
                <Stack borderRadius={24} width={['100%', '100%', '100%', '60%']} marginTop={4} spacing={8} backgroundColor={'white'} paddingX={[4, 4, 8, 24]} paddingY={[4, 4, 4, 8]} alignItems='center' textAlign='center'>
                    <Box width={8} height={8}>
                        <Image alt="messenger" src={messenger} />
                    </Box>
                    <Text fontSize='xl' fontWeight='bold'>
                        Eu ouço as mesmas coisas desde o começo…
                    </Text>
                    <Text fontSize={['md', 'md', 'md', 'md']} width={'100%'}>
                        Desde o primeiro dia no Instagram, as pessoas me trazem as mesmas dificuldades
                    </Text>
                    <Text fontSize={['md', 'md', 'md', 'md']} width={'100%'}>
                        Depois de todo o suor que você coloca para criar um post, parece que o Instagram está te boicotando. Trabalhando contra você.
                    </Text>
                    <Text fontSize={['md', 'md', 'md', 'md']} width={'100%'}>
                        Não é raro que se gaste um tempo absurdo em troca de silêncio. Poucos seguidores novos, meia dúzia de comentários, ninguém assistindo seus vídeos.
                    </Text>
                    <Box paddingY={4} width={['100%', '100%', '80%', '60%']}>
                        <Image alt="popup1" src={popup1} />
                    </Box>
                    <Text fontSize={['md', 'md', 'md', 'md']} width={'100%'}>
                        Eu sei muito bem como é isso.
                    </Text>
                    <Text fontSize={['md', 'md', 'md', 'md']} width={'100%'}>
                        <Text textDecor='underline'>Essa é a parte mais dura:</Text> se esforçar tanto e não ter um retorno financeiro, <strong>não poder dirigir um bom carro, ir nos seus restaurantes favoritos</strong>, sem preocupação com nada.
                    </Text>
                    <Text fontSize={['md', 'md', 'md', 'md']} width={'100%'}>
                        Ter aquela segurança do <strong>dinheiro entrando na sua conta todos os dias</strong>, faça chuva ou faça sol.
                    </Text>
                    <Text fontSize={['md', 'md', 'md', 'md']} width={'100%'}>
                        Se você chegou aqui, é porque você sabe que tem potencial. Você quer vender algum produto ou serviço, quer ser reconhecido, quer ter autoridade no seu mercado.
                    </Text>
                    <Text fontSize={['md', 'md', 'md', 'md']} width={'100%'}>
                        Mas Meu Deus, como essas coisas parecem difíceis no começo, não é mesmo?
                    </Text>
                    <Text fontSize={['md', 'md', 'md', 'md']} width={'100%'}>
                        Eu já senti tudo isso na pele e eu suei demais para dar a volta por cima.
                    </Text>
                    <Text fontSize={['md', 'md', 'md', 'md']} width={'100%'}>
                        Eu sei o que é ser anônimo, desconhecido, não ter seguidores, e muito menos clientes.
                    </Text>
                    <Box paddingY={4} width={['100%', '100%', '80%', '60%']}>
                        <Image alt="popup1" src={popup2} />
                    </Box>
                    <Text fontSize={['md', 'md', 'md', 'md']} width={'100%'}>
                        Eu sei que o sucesso no Instagram é possível, que a viralização está ao alcance de todos, que pessoas comuns, feito eu e você, <strong>podem conquistar seguidores e vender demais por aqui</strong>.
                    </Text>
                    <Text fontSize={['md', 'md', 'md', 'md']} width={'100%'}>
                        E foi por isso que eu decidi criar a mentoria Efeito Posicionado.
                    </Text>
                    <Text fontSize={['md', 'md', 'md', 'md']} width={'100%'}>
                        Juntos, nós vamos transformar completamente seu negócio. Vamos construir uma conta que atrai muitos seguidores, crescendo rápido.
                    </Text>
                    <Text fontSize={['md', 'md', 'md', 'md']} width={'100%'}>
                        Um perfil viciante que as pessoas querem acompanhar o dia inteiro. E mais importante: uma conta que converte seguidores em clientes <strong>todos os dias</strong>.
                    </Text>
                    <Text fontSize={['md', 'md', 'md', 'md']} width={'100%'}>
                    <strong> Em 7 semanas de encontros ao vivo, eu vou te conduzir até o faturamento que você merece</strong>
                    </Text>

                    <Text  fontSize={['md', 'md', 'md', 'lg']} width={'100%'}>
                        É isso mesmo. Precisamos de menos de 2 meses. A cada semana, você dará um novo salto.
                    </Text>
                    <Text fontSize={['md', 'md', 'md', 'lg']} width={'100%'}>
                        A cada semana você vai receber mais seguidores que acompanham de perto o seu conteúdo e compram o que você vende.
                    </Text>
                    <Text fontSize={['md', 'md', 'md', 'lg']} width={'100%'}>
                        A cada semana você vai estar mais preparado, mais profissional e confiante.
                    </Text>
                </Stack>
            </Stack>
            <Stack id='texture' width={'100%'} bgColor={'white'} alignItems='center' padding={[4, 4, 4, 12]} backgroundColor='orange.400' paddingBottom={12}>
                <Stack width={['100%', '90%', '70%', '50%']}>
                    <Box padding={4} marginTop={8} borderRadius={12} borderColor={'white'} borderWidth={1}>
                        <Text fontWeight='bold' fontSize='xl' textColor='white' textAlign='center'>
                            O que vai acontecer nessas
                        </Text>
                        <Text fontWeight='extrabold' fontSize='xl' textColor='white' textAlign='center'>
                            7 semanas
                        </Text>
                    </Box>
                    <Stack paddingTop={6} spacing={8}>
                        <Stack paddingBottom={4} position='relative' alignItems='center'>
                            <Flex zIndex={5} alignItems={'flex-end'} width={'90%'} justify='space-between'>
                                <Flex width={12} alignItems='center' justifyContent='center' height={12}>
                                    <Image width={60} height={60} alt="img" src={brain} />
                                </Flex>
                                <Box width={6} height={6}>
                                    <Image alt="options" src={options} />
                                </Box>
                            </Flex>
                            <Box marginBottom={4} zIndex={5} width={'90%'}>
                                <Text fontSize={'xs'} fontWeight='bold'>
                                    Semana 0:
                                </Text>
                                <Divider borderColor='orange.500' width={12} borderWidth={2} />
                                <Text marginTop={2} fontSize={'sm'} color='black'>O módulo <Text as='span' fontWeight='bold' textColor='orange.500'>O marketing por trás do marketing</Text> foi pensado para solidificar o seu conhecimento, te conduzir, passo a passo, com uma didática acessível, até uma forma profissional de pensar sobre vendas na internet.</Text>
                            </Box>
                            <Box shadow={'lg'} width={'100%'} borderRadius={12} height={'95%'} bottom={0} bgColor={'white'} position='absolute' />
                        </Stack>
                        <WeekInfoBullet url={boxUser} text='Nós vamos montar um perfil mais atraente, desenhado para o seu mercado, que deixa claro para quem chega qual é a essência do seu negócio, e também vou compartilhar com você as bases da estratégia que me permitiu ganhar 180 mil seguidores em apenas 7 meses..' week="1" />
                        <WeekInfoBullet url={instagram} text='Aqui nós vamos mergulhar a fundo na produção de conteúdo para todos os canais do Instagram. Esqueça os bloqueios criativos e as inseguranças, você vai dominar todos os canais de comunicação do Instagram.' week="2" />
                        <Stack paddingBottom={4} position='relative' alignItems='center'>
                            <Flex zIndex={5} alignItems={'flex-end'} width={'90%'} justify='space-between'>
                                <Flex width={12} alignItems='center' justifyContent='center' height={12}>
                                    <Image width={60} height={60} alt="img" src={graph} />
                                </Flex>
                                <Box width={6} height={6}>
                                    <Image alt="options" src={options} />
                                </Box>
                            </Flex>
                            <Box marginBottom={4} zIndex={5} width={'90%'}>
                                <Text fontSize={'xs'} fontWeight='bold'>
                                    Semana 3:
                                </Text>
                                <Divider borderColor='orange.500' width={12} borderWidth={2} />
                                <Text marginTop={2} fontSize={'sm'} color='black'>
                                    Nada de meia dúzia de seguidores novos por semana, <strong>nessa semana você vai dominar as melhores estratégias de crescimento acelerado.</strong>
                                </Text>
                            </Box>
                            <Box shadow={'lg'} width={'100%'} borderRadius={12} height={'95%'} bottom={0} bgColor={'white'} position='absolute' />
                        </Stack>
                        <WeekInfoBullet url={bounty} text='Vamos multiplicar o seu dinheiro com tráfego pago: você vai aprender a facilitar muito seu sucesso no Instagram investindo da forma correta, sem desperdiçar nem um centavo.' week="4" />
                        <WeekInfoBullet url={shakeHand} text='Na quinta semana vamos fazer a máquina girar, eu vou te ensinar o passo a passo completo para transformar seguidores em clientes pagantes, cobrando o que você merece pelos seus produtos e serviços.' week="5" />
                        <WeekInfoBullet url={starEmoji} text='Essa é a semana da virada, você vai entender como escalar suas vendas no Instagram, se tornar uma referência e deixar a concorrência para trás de uma vez por todas.' week="6" />
                    </Stack>
                </Stack>
            </Stack>
            <Stack width={['100%', '80%', '70%', '50%']} spacing={[6, 6, 8, 12]} padding={2} alignItems='center' textAlign='center'>
                <Stack paddingTop={4} width='100%'>
                    <Text fontWeight='bold' fontSize='2xl' textAlign='center'>
                        E não é só isso...
                    </Text>
                    <Text fontSize={['sm', 'md', 'lg', 'lg']}>
                        Sim, essas 7 semanas vão ser intensas e transformadoras, mas eu vou te entregar muito mais.
                    </Text>
                    <Text fontSize={['sm', 'md', 'lg', 'lg']}>
                        Você também vai receber de bônus o curso completo
                    </Text>
                </Stack>
                <Stack  direction={['column', 'column', 'column', 'row']} width={'100%'} alignItems='center' spacing={[4, 4, 4, 8]}>
                    <Flex alignContent='center' justifyContent='center' width={['60%', '80%', '80%', '100%']}>
                        <Image src={anuncios} alt='anuncios' />
                    </Flex>
                    <Stack alignItems='center' textAlign={['center', 'center', 'center', 'initial']}>
                        <Text fontWeight='bold' fontSize={['lg', 'xl' ,'2xl' ,'2xl']}>
                            Dominando os anúncios do Instagram
                        </Text>
                        <Text width={'90%'} fontSize={['md', 'md' ,'lg' ,'lg']} textAlign='center'> 
                            Um aprofundamento completo no universo do tráfego pago e como fazer cada centavo contar na aquisição de novos clientes.
                        </Text>
                    </Stack>
                </Stack>
               <Stack paddingY={2} width='100%' alignItems='center' spacing={4}>
               <Box width={['90%', '100%', '100%', '50%']}>
                    <Image alt="popup1" src={popup4} />
                </Box>
                <Box width={['90%', '100%', '100%', '50%']}>
                    <Image alt="popup1" src={popup5} />
                </Box>
               </Stack>
                <Stack direction={['column', 'column', 'column', 'row-reverse']} width={'100%'} alignItems='center' spacing={[4, 4, 4, 8]}>
                    <Flex alignContent='center' justifyContent='center' width={['80%', '80%', '80%', '100%']}>
                        <Image alt="popup1" src={gpt} />
                    </Flex>
                    <Stack alignItems='center' textAlign={['center', 'center', 'center', 'initial']}>
                        <Text fontWeight='bold' fontSize={['lg', 'xl' ,'2xl' ,'2xl']}>
                            Chat GPT para Instagram: Produzindo Conteúdo de Forma Rápida, Eficiente E Lucrativa
                        </Text>
                        <Text width={'90%'} fontSize={['md', 'md' ,'lg' ,'lg']} textAlign='center'> 
                            Onde vou te mostrar a fundo o poder dessa ferramenta, como ela vai acelerar sua produção de conteúdo, elevar o nível do seu engajamento e consequentemente explodir suas vendas.
                        </Text>
                    </Stack>
                </Stack>
                <Text paddingTop={6} fontWeight='bold' fontSize={['lg', 'xl' ,'2xl' ,'2xl']} textAlign='center'>
                    …E se, depois disso tudo, você ainda me dissesse que está inseguro, porque não sabe falar com a câmera, não se sente bem verbalizando suas ideias, não se preocupe:
                </Text>
                <Text paddingY={4} fontWeight='bold' fontSize={['lg', 'xl' ,'2xl' ,'2xl']} textAlign='center'>
                    Eu incluí também a Masterclass
                </Text>
                <Stack direction={['column', 'column', 'column', 'row']} width={'100%'} alignItems='center' spacing={[4, 4, 4, 8]}>
                    <Flex alignContent='center' justifyContent='center' width={['80%', '80%', '80%', '75%']}>
                        <Image alt="popup1" src={comunicacao} />
                    </Flex>
                    <Stack alignItems='center' textAlign={['center', 'center', 'center', 'initial']}>
                        <Text fontWeight='bold' fontSize={['lg', 'xl' ,'2xl' ,'2xl']}>
                            Destravando Sua Comunicação No Instagram
                        </Text>
                        <Text width={'90%'} fontSize={['md', 'md' ,'lg' ,'lg']} textAlign='center'> 
                            Tudo que você precisa saber para falar com confiança na criação do seu conteúdo.
                        </Text>
                    </Stack>
                </Stack>
                <Text paddingY={6} fontWeight='bold' fontSize='2xl' textAlign='center'>
                    Esse é o momento da decisão.
                </Text>
                <Stack alignItems='center' spacing={6} padding={[4, 4, 8, 12]} borderRadius={12} bgColor={'white'} shadow='2xl'>
                    <Text>
                        As próximas semanas vão passar de qualquer forma; mas você está a uma escolha de mudar o seu negócio completamente.
                    </Text>
                    <Box width='90%'>
                        <Image src={popup6} alt='popup' />
                    </Box>
                    <Text>
                        Você vai estar no grupo que mudou o jogo ou no das pessoas que deixaram tudo como está agora?
                    </Text>
                    <Text>
                        Uma realidade diferente é possível, você não chegou tão longe nessa conversa sem motivo nenhum.
                    </Text>
                    <Text>
                        Você quer mudar, quer mais seguidores, mais reconhecimento e dinheiro, <strong>é seu direito querer isso.</strong>
                    </Text>
                    <Text>
                        <strong>Foi para te entregar isso que eu pensei o Efeito Posicionado</strong>
                    </Text>
                    <Text>
                        Eu vou comprar essa briga junto com você, nós estaremos lado a lado trabalhando pelo seu sucesso no Instagram durante 7 semanas
                    </Text>
                </Stack>
            </Stack>
            <Stack paddingTop={8} spacing={8} width={['100%', '100%', '70%', '40%']} alignItems='center'>
                <Text paddingY={[4, 4, 6, 8]} fontWeight='bold' fontSize={['2xl', '2xl', '2xl', '3xl']} textAlign='center'>
                    No <Text as='span' textDecor={'underline'} textUnderlineOffset={2} textDecorationColor='orange.500'>Efeito Posicionado,</Text> <Text> é isso que você vai levar:</Text>
                </Text>
                <PriceCourse text="Efeito Posicionado (7 MÓDULOS COMPLETOS + 6 SESSÕES DE MENTORIA AO VIVO):" price="R$7.997,00" />
                <PriceCourse text="Curso Dominando Os Anúncios No Instagram" price="R$697,00" />
                <PriceCourse text="Curso Chat GPT para Instagram: Produzindo Conteúdo de Forma Rápida, Eficiente E Lucrativa" price="R$597,00" />
                <PriceCourse text="Masterclass Destravando Sua Comunicação No Instagram" price="R$497,00" />
                <PriceCourse text="Replay das lives Desafio Posicionado Digital" price="R$297,00" />
                <Text paddingBottom={8}>
                    +OUTROS BÔNUS ESPECIAIS
                </Text>
            </Stack>
            <Flex width={'100%'} marginY={12}>
                <Timer />
            </Flex>
            <Stack width={'100%'} paddingX={4} paddingTop={8} alignItems='center' textAlign={'center'} spacing={8}>
                <Stack textAlign={'center'} alignItems='center' spacing={0}>
                    <Text fontSize={'sm'}>
                        TOTAL:
                    </Text>
                    <Text fontWeight={'extrabold'} fontSize={'3xl'} textDecor={'line-through'}>
                        R$10.085,00
                    </Text>
                </Stack>
                <Stack textAlign={'center'} spacing={0}>
                    <Text fontSize={['sm', 'md' ,'md' ,'lg']}>
                        HOJE, ESSE É O NOSSO VALOR DO PROGRAMA:
                    </Text>
                    <Text fontWeight={'extrabold'} fontSize={'3xl'} textDecor={'line-through'}>
                        R$1997,00
                    </Text>
                </Stack>
                <Text fontSize={['md', 'md' ,'md' ,'lg']}>
                    Mas essa é a primeira turma online do <Text as='span' fontWeight={'extrabold'}textDecor={'underline'} textUnderlineOffset={2} textDecorationColor='orange.500'>Efeito Posicionado,</Text> <strong>então eu decidi ir além</strong>.
                </Text>
                <Text fontSize={['md', 'md' ,'md' ,'lg']}>
                    Apenas até <strong>19/03</strong> você pode entrar nessa jornada por apenas:
                </Text>
                <Stack id='cta-efeito' width={'fit-content'} spacing={0} paddingX={12} paddingY={2} borderRadius={12} borderColor='orange.500' borderWidth={1}>
                    <Text fontSize={['md', 'md' ,'md' ,'lg']}>
                        HOJE
                    </Text>
                    <Text fontWeight={'extrabold'} fontSize={'4xl'} textColor='orange.500'>
                        R$997,00
                    </Text>
                    <Text fontWeight='bold' fontSize={'sm'}>
                        (12X DE R$99,40)
                    </Text>
                </Stack>
            <Button onClick={()=>{goTo('https://pay.kiwify.com.br/6LeuLKG')}} id='anim-bg-gradient' size='lg' colorScheme='orange' height={16} width={['100%', '95%' ,'75%' ,'30%']}>
              <Stack direction='row'>
                <Text>QUERO VENDER MUITO</Text>
              </Stack>
            </Button>
            </Stack>
            <Stack padding={[8, 8 ,8 ,0]} alignItems='center'>
                <Box paddingBottom={8} width={['70%', '100%', '100%', '20%']}>
                    <Image alt="selo" src={selo} />
                </Box>
                <Flex direction={['column', 'column', 'column', 'row']} width={['100%', '100%' ,'100%' ,'80%']} justify='center' alignItems='center'>
                    <Box zIndex={50} width={['75%', '75%' ,'75%','20%']}>
                        <Image alt="afonsocelular" src={afonsoCelular} />
                    </Box>
                    <Box marginTop={-50} marginLeft={[0, 0, 0, -12]} width={['100%', '90%', '70%' ,'50%']} bgColor={'gray.100'} shadow={'lg'} textAlign={['center', 'center' ,'center' ,'initial']} paddingTop={[16, 16 ,16 ,6]} paddingBottom={6} paddingLeft={[6,6,6,12]} paddingRight={6} borderRadius={12}>
                        <Text fontSize={'sm'}>
                            Meu nome é <strong>Afonso Molina</strong>, eu ganhei mais de 180 mil seguidores em apenas 7 meses. Quando eu entendi como o Instagram funcionava, a minha vida mudou. Fui de um negócio falido e um volume incontável de dívidas para ter uma empresa de sucesso em menos de 2 anos, agora, vou te mostrar como você também pode mudar a sua vida com essa ferramenta.
                        </Text>
                    </Box>
                </Flex>
            </Stack>
            <FAQ />
            <Box width={'100%'} height={12} bgColor='orange.500' />
        </Stack>
      </>

    )
}