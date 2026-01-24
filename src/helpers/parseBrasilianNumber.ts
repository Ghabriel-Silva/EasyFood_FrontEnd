export function parseBrazilianNumber(value: string | number | undefined): number {
    if (value === undefined) return 0
    if (typeof value === "number") return value

    return Number(
        value
            .replace(/\./g, "") // remove milhares
            .replace(",", ".")  // troca decimal
    ) || 0
}
