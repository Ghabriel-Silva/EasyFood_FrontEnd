

export enum UniMedida {
    KILO = "kg",
    GRAMA = "g",
    LITRO = "l",
    UNIDADE = "un",
    PORCAO = "porcao",
    FATIA = "fatia",
    PEDACO = "pedaco",
    COMBO = "combo",
    NONE = "none",
}
export function tranformeUniMedida(value: string| undefined): string| undefined{
    
    switch (value) {
        case UniMedida.KILO:
            return 'kg';
        case UniMedida.FATIA:
            return 'Fatia';
        case UniMedida.COMBO:
            return 'Combo';
        case UniMedida.GRAMA:
            return 'g';
        case UniMedida.LITRO:
            return 'l';
        case UniMedida.PEDACO:
            return 'Pedaço';
        case UniMedida.PORCAO:
            return 'Porção';
        case UniMedida.UNIDADE:
            return 'Un';
        case UniMedida.NONE:
            return ''

        default: return ''
    }
}

