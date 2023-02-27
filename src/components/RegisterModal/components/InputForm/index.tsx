import { Input, Stack, Text } from "@chakra-ui/react";
import { HTMLInputTypeAttribute } from "react";
import { InputFormProps } from "./types";


export default function InputForm({
  value,
  field,
  placeholder,
  type,
  setValue,
}: InputFormProps) {
  return (
    <Stack width='100%'>
      <Text fontWeight='semibold' fontFamily="heading">{field}</Text>
      <Input
        width="100%"
        borderRadius="full"
        _placeholder={{ color: "orange.500", opacity: 0.5 }}
        textColor='orange.500'
        borderColor="orange.500"
        variant="outline"
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
    </Stack>
  );
}
