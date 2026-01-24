//Função para pegar a quantidade e formatar ela para uma ui mais agradavel

export function tranformeQuantity(
    value: string,
    quantity: number | string
) {
    const parsedQuantity:number = Number(quantity)

    if (isNaN(parsedQuantity)) return "0.000"

    if (value === "kg" || value === "g") {
        return parsedQuantity.toFixed(3)
    }

    return parsedQuantity
}
