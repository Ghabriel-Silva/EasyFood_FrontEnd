import { InputBase } from "@/app/(protected)/orders/components/ui/index"
import { useFormContext, Controller } from "react-hook-form"
import { FilterOrderSchemaInterface } from "@/app/(protected)/orders/validations/filter-orders"




export const InputInicialDate = () => {
    const { control, trigger } = useFormContext<FilterOrderSchemaInterface>()

    return (
        <Controller
            name={'startDate'}
            control={control}
            render={({ field }) => (
                <InputBase
                    value={
                        field.value instanceof Date
                            ? field.value.toISOString().split("T")[0]
                            : field.value ?? ""
                    }
                    type="date"
                    onChange={(value: string) => {
                        field.onChange(value)
                        trigger('finalDate')
                    }}
                />
            )}
        />
    )
}