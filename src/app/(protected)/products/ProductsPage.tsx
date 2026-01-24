"use client"

import { Box, Button, Flex, Heading,  } from "@chakra-ui/react"
import { MdAdd } from "react-icons/md";


export const ProductsPage = () => {
    return (
        <Box>
            <Flex justify="space-between"  >
                <Heading size="xl" fontWeight="medium">Produtos</Heading>
                <Button bg="blue.600" borderRadius="lg">Novo produto<MdAdd /></Button>
            </Flex>
        </Box>
    )
}