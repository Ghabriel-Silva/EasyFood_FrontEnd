import { SelectBase } from "@/app/(protected)/orders/components/ui/SelectBase"
import { createListCollection } from "@chakra-ui/react"
import { useState } from "react"


export const SelectFilterStatus = () => {
   
    return (
        <></>
        // <SelectBase
        //     items={status.items}
        //     value={statusa}
        //     onChange={setStatus}
        //     placeholder="Status Pedido"
        // />
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

