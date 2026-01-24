import { SelectBase } from "@/ui/index"
import { FilterOrderSchemaInterface } from "@/app/(protected)/orders/validations/filter-orders"
import { createListCollection } from "@chakra-ui/react"

import { Controller, useFormContext } from "react-hook-form"


export const SelectFilterStatus = () => {
    const { control } = useFormContext<FilterOrderSchemaInterface>()
    return (
        <Controller
            name="status"
            control={control}
            render={({ field }) => (
                <SelectBase
                    items={status.items}
                    value={(field.value ?? []).map((v)=>String(v)).filter(Boolean)}
                    onChange={(values)=>field.onChange(values)}
                    placeholder="Selecione status"

                />
            )}

        />

    )
}

const status = createListCollection({
    items: [
        { label: "Pendente ", value: "Pendente" },
        { label: "Completo", value: "Completo" },
        { label: "Entregue", value: "Entregue" },
        { label: "Cancelado", value: "Cancelado" },
        { label: "Preparando", value: "Preparando" },
    ],
})

