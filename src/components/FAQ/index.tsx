import { Accordion, Stack, Text } from "@chakra-ui/react";
import FaqItem from "./components/FaqItem";
import { questions } from "./constants";

export default function FAQ(){
    return(
      <Stack width={['100%', '9 0%' ,'70%' ,'60%']} marginTop={8} marginBottom={24} spacing={4} alignItems='center'>
  <Text fontWeight='extrabold' fontSize='2xl'>FAQ</Text>
        <Accordion width={'90%'} marginY={12} allowToggle allowMultiple defaultIndex={questions.map((_, index) => index)}>
            {questions.map(question => <FaqItem {...question}/>)}
    </Accordion>
      </Stack>
    
    )
}