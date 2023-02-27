import { Flex, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Index(){
    const route = useRouter()
   
    useEffect(()=>{
        route.push('/posicionado-digital')
    },[])

    return(
        <Flex width={'100%'} height={36} alignItems='center' justifyContent='center'>
            <Text>Estamos redirecionando você...</Text>
        </Flex>
    )
}