import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react";
import { FaqItemProps } from "./types";

export default function FaqItem({ text, title}: FaqItemProps){
    return (
        <AccordionItem >  
        <Text>
            <AccordionButton borderRadius={4} _expanded={{ bg: 'orange.500', color: 'white' }}>
                <Box as="span" flex='1' textAlign='left'>
                    <Text fontWeight={'bold'}>{title}</Text>
                </Box>
                <AccordionIcon />
            </AccordionButton>
        </Text>
        <AccordionPanel pb={4}>
            <Text textColor={'gray.500'}>
            {text}
            </Text>
        </AccordionPanel>
    </AccordionItem>
    )
}