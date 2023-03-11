import { Flex, Text } from "@chakra-ui/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function ErrorPage(){
    const route = useRouter()
   
    useEffect(()=>{
        route.push('/efeito-posicionado')
    },[])

    return(
        <>
        <Head>
        <title>Estamos redirecionando você - Afonso Molina</title>
      </Head>
        <Flex width={'100%'} height={36} alignItems='center' justifyContent='center'>
            <Text>Estamos redirecionando você...</Text>
        </Flex>
        </>
    )
}