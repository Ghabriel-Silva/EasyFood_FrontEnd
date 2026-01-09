import * as yup from "yup";

export enum OrderStatus {
    PENDING = "Pendente",
    PREPARING = "Preparando",
    COMPLETED = "Completo",
    DELIVERED = "Entregue",
    CANCELLED = "Cancelado",
}

export enum PaymentMethod {
    CASH = "Dinheiro",
    CARD = "Cartão",
    PIX = "Pix",
    OTHER = "Outros"
}

export const filterOrderSchema = yup.object({
    status: yup
        .array()
        .of(yup.mixed<OrderStatus>().oneOf(Object.values(OrderStatus), "Status deve ter um dos valores a seguir: ['Pendente,Preparando,Completo,Entregue,Cancelado']"))
        .min(0, "É necessário pelo menos um status")
        .typeError("Defina um valor válido para o status")
        .notRequired(),

    paymentMethod: yup
        .array()
        .of(yup.mixed<PaymentMethod>().oneOf(Object.values(PaymentMethod), "Forma de pagamento deve ter um dos valores a seguir: Dinheiro, Cartão, Pix, Outros"))
        .min(0, "É necessário pelo menos um metodo de pagamento")
        .typeError("Defina um valor válido para o forma de pagamento")
       .notRequired(),


    startDate: yup
        .date()
        .nullable()
        .transform((value, originalValue) =>
            originalValue === "" ? null : value
        )
        .typeError("Data inicial inválida"),

    finalDate: yup
        .date()
        .nullable()
        .transform((value, originalValue) =>
            originalValue === "" ? null : value
        )
        .typeError("Data final inválida")
        .test(
            "require-start-date-if-final",
            "Defina a data inicial",
            function (finalDate) {
                const { startDate } = this.parent
                if (!finalDate) return true
                return !!startDate
            }
        )
        .test(
            "final-after-start",
            "A data final não pode ser menor que a inicial",
            function (finalDate) {
                const { startDate } = this.parent
                if (!finalDate || !startDate) return true
                return finalDate >= startDate
            }
        ),

    clientName: yup
        .string()
        .typeError('O nome dever ser apenas letras')
        .notRequired()
})
export type FilterOrderSchemaInterface = yup.InferType<typeof filterOrderSchema>