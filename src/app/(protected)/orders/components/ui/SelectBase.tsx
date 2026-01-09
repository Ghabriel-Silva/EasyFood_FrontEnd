// SelectBase.tsx
"use client"

import { Select, createListCollection } from "@chakra-ui/react"

interface SelectBaseProps {
    onChange: (value: string[]) => void
    value: string[] | undefined
    placeholder?: string
    items: { label: string; value: string }[]
}

export function SelectBase({
    value ,
    onChange,
    placeholder,
    items
}: SelectBaseProps) {
    const collection = createListCollection({ items })

    return (
        <Select.Root
            multiple
            value={value ?? []}
            onValueChange={(item) => onChange(item.value)} //Mostra o valor selecionado ochange contem o valor do array
            collection={collection}
            size="sm"
        >
            <Select.HiddenSelect />

            <Select.Control>
                <Select.Trigger>
                    <Select.ValueText placeholder={placeholder} />
                </Select.Trigger>

                <Select.IndicatorGroup>
                    <Select.ClearTrigger />
                    <Select.Indicator />
                </Select.IndicatorGroup>
            </Select.Control>

            <Select.Positioner>
                <Select.Content >
                    {items.map((item) => (
                        <Select.Item key={item.value} item={item}>
                            {item.label}
                            <Select.ItemIndicator />
                        </Select.Item>
                    ))}
                </Select.Content>
            </Select.Positioner>
        </Select.Root>
    )
}
