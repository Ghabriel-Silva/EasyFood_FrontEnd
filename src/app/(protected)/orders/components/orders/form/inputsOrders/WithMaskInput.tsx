import { OrderFormSchemaInterface } from "@/app/(protected)/orders/validations/orders-form"
import { Input, InputProps } from "@chakra-ui/react"
import { Controller, useFormContext } from "react-hook-form"
import { withMask } from "use-mask-input"

export const WithMaskInput = (props: InputProps) => {

    const { control } = useFormContext<OrderFormSchemaInterface>()
    return (

        <Controller
            name="customerPhone"
            control={control}
            render={({ field}) => (               
                    <Input {...props}
                        value={field.value ?? ""}
                        placeholder="(99) 99999-9999"
                        onChange={field.onChange}
                        ref={withMask("(99) 99999-9999")}
                        onBlur={field.onBlur}
                    />
            )}

        />
    )
}