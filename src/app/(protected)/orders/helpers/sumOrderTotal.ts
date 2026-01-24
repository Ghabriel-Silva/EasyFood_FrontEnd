interface sumOrder {
    frete: string,
    customFreight: number,
    additionalValue: number,
    totalProdutos:number
    discountValue: number,
}

export function sumOrderTotal({ frete, customFreight, additionalValue,totalProdutos, discountValue}: sumOrder):number | string {

    const sum: number = Number(frete) + (customFreight) + (additionalValue) + (totalProdutos)
    if (sum < discountValue) {
        return 'O desconto não pode ser maior que o valor Total da compra'
    }
    const total: number  = sum - (discountValue)
    return total
}