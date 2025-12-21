"use client"

import { useMemo } from "react"
import { Select, Spinner, createListCollection } from "@chakra-ui/react"
import { useOrdersCreate} from "@/app/(protected)/orders/hooks/useOrderCreate"
import { Product } from "@/app/(protected)/orders/interfaces/porducts";

interface SelectProductsProps {
    token: string
}

export const SelectProducts = ({ token }: SelectProductsProps) => {

    const { data, isLoading} = useOrdersCreate(token);

    

  const collection = useMemo(() => {
  return createListCollection<Product>({  // ✅ tipo Product aqui
    items: data ?? [],
    itemToString: (product) => product.name,
    itemToValue: (product) => product.id,
  });
}, [data]);



    return (
        <Select.Root
            collection={collection}
            size="sm"
            width="320px"
            positioning={{ strategy: "fixed", hideWhenDetached: true }} // importante dentro do Dialog
        >
            <Select.HiddenSelect />
            <Select.Label>Produto</Select.Label>

            <Select.Control>
                <Select.Trigger>
                    <Select.ValueText placeholder="Selecione um produto" />
                </Select.Trigger>

                <Select.IndicatorGroup>
                    {isLoading && <Spinner size="xs" borderWidth="1.5px" color="fg.muted" />}
                    <Select.Indicator />
                </Select.IndicatorGroup>
            </Select.Control>
            <Select.Positioner>
                <Select.Content>
                    {collection.items.map((product) => (
                        <Select.Item item={product} key={product.id}>
                            {product.name} - R$ {product.price}
                            <Select.ItemIndicator />
                        </Select.Item>
                    ))}
                </Select.Content>
            </Select.Positioner>
        </Select.Root>
    )
}
