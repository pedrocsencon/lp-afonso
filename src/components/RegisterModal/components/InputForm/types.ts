import { HTMLInputTypeAttribute } from "react";

export type InputFormProps = {
    field: string;
    placeholder: string;
    type: HTMLInputTypeAttribute;
    value: string;
    setValue: (value: string) => void;
  };