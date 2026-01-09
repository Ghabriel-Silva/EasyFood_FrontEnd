import { SelectBase } from "@/app/(protected)/orders/components/ui/SelectBase"
import { FilterOrderSchemaInterface } from "@/app/(protected)/orders/validations/filter-orders"
import { createListCollection } from "@chakra-ui/react"
import { Controller, useFormContext } from "react-hook-form"


export const SelectFilterPayment = () => {
    const { control } = useFormContext<FilterOrderSchemaInterface>()

    return (
        <Controller
            name={'paymentMethod'}
            control={control}
            render={({ field }) => (
                <SelectBase
                    items={payment.items}
                    value={(field.value ?? []).map((v) => String(v)).filter(Boolean)}
                    onChange={(values) => field.onChange(values)} //Pega o valor selecionado de strings[]
                    placeholder="Método de pagamento"
                />
            )}
        />

    )
}

const payment = createListCollection({
    items: [
        { label: "Dinheiro ", value: "Dinheiro" },
        { label: "Cartão", value: "Cartão" },
        { label: "Pix", value: "Pix" },
        { label: "Outros", value: "Outros" }
    ],
})
