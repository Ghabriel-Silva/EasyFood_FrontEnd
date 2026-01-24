// SelectBase.tsx
"use client"

import { Select, createListCollection, Portal } from "@chakra-ui/react"

interface SelectBaseProps {
    onChange: (value: string[]) => void
    value: string[] | null | undefined
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
            onValueChange={(details) => onChange(details.value)} //Mostra o valor selecionado ochange contem o valor do array
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

            <Portal>
                <Select.Positioner>
                    <Select.Content>
                        {items.map((item) => (
                            <Select.Item key={item.value} item={item}>
                                {item.label}
                                <Select.ItemIndicator />
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Portal>
        </Select.Root>
    )
}
