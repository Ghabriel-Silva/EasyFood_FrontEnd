import { SimpleGrid } from "@chakra-ui/react"
import { ButtonFilter, SelectFilterPayment, SelectFilterStatus, InputInicialDate, InputFinalDate, SelectAsyncClient } from "@/app/(protected)/orders/components/orders/filters/index"
import { FormProvider, SubmitHandler, useForm, } from "react-hook-form"
import { filterOrderSchema, FilterOrderSchemaInterface } from "../../../validations/filter-orders"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormField } from "@/app/(protected)/orders/components/ui/FormField"


export const FilterContainer = () => {

    const methods = useForm({
        resolver: yupResolver(filterOrderSchema),
        mode: "onSubmit"
    })

    const {
        handleSubmit,
        formState: { errors }
    } = methods

    const onSubmite: SubmitHandler<FilterOrderSchemaInterface> = (data: FilterOrderSchemaInterface) => {
        console.log('chamando ', data)
        console.log(errors)
    }
    return (
        <FormProvider {...methods} >

            <form onSubmit={handleSubmit(onSubmite)}>
                <SimpleGrid minChildWidth="250px" gap={4} pb={4} bg={"bg.subtle"}>
                    <FormField label="Data inicial" error={errors.startDate?.message}>
                        <InputInicialDate />
                    </FormField>
                    <FormField label="Data Final" error={errors.finalDate?.message}>
                        <InputFinalDate />
                    </FormField>
                    <FormField label="Status Pedido">
                        <SelectFilterStatus />
                    </FormField>
                    <FormField label="Método de pagamento">
                        <SelectFilterPayment />
                    </FormField>
                    <FormField label="Buscar Cliente">
                        <SelectAsyncClient />
                    </FormField>
                    <ButtonFilter />
                </SimpleGrid>
            </form>
        </FormProvider>


    )
}