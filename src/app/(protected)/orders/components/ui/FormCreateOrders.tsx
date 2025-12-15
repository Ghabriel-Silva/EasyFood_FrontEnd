
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Field, Input, Stack } from "@chakra-ui/react"
import { withMask } from "use-mask-input"

import { OrderCreateSchema} from "../../validations/orders-create"

export const FormCreateOrders = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(OrderCreateSchema)
    })

    const onSubmit = handleSubmit((data) => console.log(data))

    return (
        <form onSubmit={onSubmit}>
            <Stack gap="4" align="flex-start" maxW="sm">
                <Field.Root invalid={!!errors.customerName}>
                    <Field.Label>Cliente</Field.Label>
                    <Input {...register("customerName")} />
                    <Field.ErrorText>{errors.customerName?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.customerAddress}>
                    <Field.Label>Endereço</Field.Label>
                    <Input {...register("customerAddress")} />
                    <Field.ErrorText>{errors.customerAddress?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.customerPhone}>
                    <Field.Label>Telefone</Field.Label>
                    <Input placeholder="(99) 99999-9999"  {...register("customerPhone")} ref={withMask("(99) 99999-9999")}  />
                    <Field.ErrorText>{errors.customerPhone?.message}</Field.ErrorText>
                </Field.Root>

                <Button type="submit">Submit</Button>
            </Stack>
        </form>
    )
}