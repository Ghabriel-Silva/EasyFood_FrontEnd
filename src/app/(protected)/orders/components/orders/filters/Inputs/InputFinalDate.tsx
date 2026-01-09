
import { InputBase } from "@/app/(protected)/orders/components/ui/index"
import { FilterOrderSchemaInterface } from "@/app/(protected)/orders/validations/filter-orders"
import { Controller, useFormContext } from "react-hook-form"


export const InputFinalDate = () => {
    const { control } = useFormContext<FilterOrderSchemaInterface>()
    return (
        <Controller
            name={"finalDate"}
            control={control}
            render={({ field }) => (
                <InputBase
                    type="date"
                    value={
                        field.value instanceof Date
                            ? field.value.toISOString().split("T")[0]
                            : field.value ?? ""
                    }
                    onChange={(value: string) => field.onChange(value)}

                />
            )}
        />

    )
}