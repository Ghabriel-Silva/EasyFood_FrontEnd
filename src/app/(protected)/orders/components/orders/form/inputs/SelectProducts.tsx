"use client"

import { useMemo, useState } from "react"
import { Select, Spinner, createListCollection, Field, Button, Stack, Span, HStack, NumberInput, IconButton } from "@chakra-ui/react"
import { ToggleTip } from "@/components/ui/toggle-tip"
import { useOrdersCreate } from "@/app/(protected)/orders/hooks/index"
import { Product } from "@/app/(protected)/orders/interfaces/porducts";
import { LuInfo, LuMinus, LuPlus } from "react-icons/lu"

interface SelectProductsProps {
    token: string
}

export const SelectProducts = ({ token }: SelectProductsProps) => {

    const [selectProduct, setSelectProduct] = useState<Product | null>(null)

    const { data, isLoading, isError } = useOrdersCreate(token);

    const collection = useMemo(() => {
        console.log('executou a colequition')
        return createListCollection<Product & { disabled?: boolean }>({
            items: (data ?? []).map((product) => ({
                ...product,
                disabled:
                    product.quantity === 0 ||
                    product.quantity === undefined,
            })),
            itemToString: (product) => product.name, //Texto que o usuário vai ver na  tela ao selecionar
            itemToValue: (product) => product.id, //Valor iterno Value, oque vou madar para o Bd
        });
    }, [data]);



    return (
        <HStack align={"end"} width={"full"}>
            <Field.Root invalid={isError}>
                <Select.Root
                    collection={collection}
                    size="sm"
                    width="320px"
                    onValueChange={(e) => {
                        const productId = e.value[0]
                        const product = collection.items.find(
                            (p) => p.id === productId
                        )
                        setSelectProduct(product ?? null)
                    }}
                >
                    <Select.HiddenSelect />
                    <Select.Label>Produto</Select.Label>
                    <Select.Control>
                        <Select.Trigger>
                            <Select.ValueText placeholder="Selecione um produto" />
                        </Select.Trigger>
                        <Select.IndicatorGroup>
                            <Select.ClearTrigger />
                            {isLoading && <Spinner size="xs" borderWidth="1.5px" color="fg.muted" />}
                            <Select.Indicator />
                        </Select.IndicatorGroup>
                    </Select.Control>
                    <Select.Positioner>
                        <Select.Content>
                            {collection.items.map((product) => (
                                <Select.Item
                                    item={product}
                                    key={product.id}
                                >
                                    <Stack gap="0" cursor="pointer">
                                        <Select.ItemText>{product.name}</Select.ItemText>
                                        <HStack fontSize="xs" gap="2">
                                            <Span color="fg.muted">
                                                R$ {product.price}
                                            </Span>
                                            {product.quantity === 0 && (
                                                <Span color="red.500">
                                                    Estoque zerado
                                                </Span>
                                            )}
                                            {product.quantity != null && product.quantity > 0 && (
                                                <Span color="green.600">
                                                    Estoque: {product.quantity}
                                                    {product.uni_medida !== 'none' && ` ${product.uni_medida}`}
                                                </Span>
                                            )}
                                        </HStack>
                                    </Stack>
                                    <Select.ItemIndicator />
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>
                </Select.Root>
                {isError && (
                    <Field.ErrorText>
                        Erro ao carregar produtos
                        <ToggleTip content="Atualize a pagina e tente novamente">
                            <Button asChild size="xs" variant="ghost" color={"red"}>
                                <LuInfo />
                            </Button>
                        </ToggleTip>
                    </Field.ErrorText>
                )}
            </Field.Root>

            {selectProduct?.uni_medida === 'un' && (
                <NumberInput.Root defaultValue="0" unstyled spinOnPress={false}
                    min={0}
                    max={selectProduct.quantity ?? 10}
                >
                    <HStack gap="2">
                        <NumberInput.DecrementTrigger asChild>
                            <IconButton variant="outline" size="sm">
                                <LuMinus />
                            </IconButton>
                        </NumberInput.DecrementTrigger>
                        <NumberInput.ValueText textAlign="center" fontSize="lg" minW="3ch" />
                        <NumberInput.IncrementTrigger asChild>
                            <IconButton variant="outline" size="sm">
                                <LuPlus />
                            </IconButton>
                        </NumberInput.IncrementTrigger>
                    </HStack>
                </NumberInput.Root>
            )}
            {selectProduct?.uni_medida !== 'uni' && (
                <NumberInput.Root
                min={0} max={selectProduct?.quantity ??  20}
                >
                    <NumberInput.Control />
                    <NumberInput.Input />
                </NumberInput.Root>
            )}
        </HStack>
    )
}
