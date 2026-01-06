import { OrderFormSchemaInterface } from "@/app/(protected)/orders/validations/orders-form"
import { Input, InputGroup } from "@chakra-ui/react"
import { useFormContext } from "react-hook-form"


type NameOpcional = 'additionalValue' | 'discountValue' | 'customFreight'

interface GroupInputProps {
    name: NameOpcional
}

export const GroupInput = ({ name }: GroupInputProps) => {

    const { register } = useFormContext<OrderFormSchemaInterface>()
    return (
        <InputGroup startAddon="R$" endAddon="BLR">
            <Input
                inputMode="numeric"
                placeholder="0.00"
                {...register(name)}
            />
        </InputGroup>
    )
}