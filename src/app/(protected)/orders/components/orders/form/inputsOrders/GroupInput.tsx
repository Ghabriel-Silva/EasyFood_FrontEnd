import { Input, InputGroup, InputGroupProps, InputProps } from "@chakra-ui/react"

interface GroupInputProps extends InputProps {
    groupProps?: Omit<InputGroupProps, 'children'>
}

export const GroupInput = ({ groupProps, ...inputProps }: GroupInputProps) => {
    return (
        <InputGroup {...groupProps}>
            <Input {...inputProps} />
        </InputGroup>
    )
}