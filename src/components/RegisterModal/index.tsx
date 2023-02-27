import { useAddUserInList, useRegisterUser } from "@/api/requests";
import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text, useToast } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import InputForm from "./components/InputForm";
import { RegisterModalProps } from "./types";
import InputMask from "react-input-mask";
import { useRouter } from "next/router";

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const { mutate: addUser, isLoading: loadingRegister } = useRegisterUser()
    const { mutate: addInList, isLoading: loadingList } = useAddUserInList()
    const toast = useToast();
    const route = useRouter();

    function clearForm() {
        setFirstName("");
        setEmail("");
        setPhone("");
    }

    const loading = useMemo(()=> loadingList || loadingRegister,[loadingList, loadingRegister])

    async function handleSubmit() {
        addUser({
            email,
            firstName,
            lastName: '',
            phone,
        }, {
            onSuccess: (res) => {
                addInList({
                    contact: res.data.contact.id, list: 4, status: 1
                },{
                    onSuccess: () => {
                        window.location.replace('https://www.afonsomolina.com.br/obrigado')
                    }
                })
                clearForm();
                onClose();
                
            },
            onError: (res: any) => {
                toast({
                    title: 'Ops, ocorreu um erro :(',
                    description: res.response.data.errors[0].title,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
            }
        })
    }

    return (
        <>
            <Modal size={'lg'} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cadastrar-se</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack paddingX={[2, 4, 8]}>
                                <InputForm
                                    field="Nome"
                                    placeholder="Seu nome"
                                    setValue={setFirstName}
                                    type='text'
                                    value={firstName}
                                />
                            <InputForm
                                field="E-mail"
                                placeholder="seuemail@exemplo.com"
                                setValue={setEmail}
                                type='email'
                                value={email}
                            />
                            <Stack>
                                <Text fontWeight='semibold' fontFamily="heading">Telefone</Text>
                                <Input
                                    as={InputMask}
                                    mask="(99)9 9999-9999"
                                    width="100%"
                                    borderRadius="full"
                                    _placeholder={{ color: "orange.500", opacity: 0.5 }}
                                    textColor='orange.500'
                                    borderColor="orange.500"
                                    variant="outline"
                                    value={phone}
                                    type="tel"
                                    height={12}
                                    fontSize='lg'
                                    placeholder="(00)0 000-000"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </Stack>
                        </Stack>
                        <Box padding={8}>
                        <Button isLoading={loading} onClick={handleSubmit} width={'100%'} colorScheme='orange'>Cadastrar</Button>
                        </Box>
                    </ModalBody>
                    </ModalContent>
            </Modal>
        </>
    )
}