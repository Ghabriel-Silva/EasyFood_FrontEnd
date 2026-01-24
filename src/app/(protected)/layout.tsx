"use client"


import { MenuMobile } from "@/ui/MenuMobile";
import { Box, Heading, Flex, Icon, Stack, Text, Link as ChakraLink } from "@chakra-ui/react"
import NextLink from "next/link"


import {
    MdOutlineNoFood,
    MdShoppingCart,
    MdCategory,
    MdFastfood,
    MdSettings,
    MdDashboard,
    MdLogout,
} from "react-icons/md";

//apenas login recebe as edições feitas aqui
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (

        <div suppressHydrationWarning  >

            {/**Layout fix mobile  */}
            <Box display={"flex"} flexDirection={{ base: 'column', md: "row" }} w="100%" height="100vh" overflow="hidden" >
                <Box display={{ base: "block", md: "none" }}>
                    <MenuMobile  >
                        {(closeMenu) => (
                            <Stack gap={6} color={"fg.muted"} >
                                {items.map((item, index) => (
                                    <ChakraLink
                                        key={index}
                                        {...cleanLink}
                                        asChild
                                    >
                                        <NextLink href={item.link} onClick={closeMenu}>
                                            <Flex
                                                align="center"
                                                gap={3}
                                                p="2"
                                                borderRadius="md"
                                                cursor="pointer"
                                                _hover={{ bg: "bg.subtle", color: "blue.400" }}
                                            >
                                                <Icon fontSize="xl">{item.icon}</Icon>
                                                <Text fontSize="sm" fontWeight="medium">{item.title}</Text>
                                            </Flex>
                                        </NextLink>
                                    </ChakraLink>
                                ))}
                            </Stack>
                        )}
                    </MenuMobile>
                </Box>

                {/**Layout fix desktop*/}
                <Box display={{ base: "none", md: "block" }} >
                    <Stack
                        w="200px"
                        height="100vh"
                        color="white"
                        p={2}
                        position="relative"
                        boxShadow="sm"
                        justify="space-between"
                    >
                        <Box>
                            <Flex height={"130px"} bg={"blue.600"} align={"flex-end"} justify={"flex-start"} w="100%" borderRadius={"md"} position={"relative"}>
                                <Flex m="2">
                                    <Icon size="lg" color="white">
                                        <MdOutlineNoFood />
                                    </Icon>
                                    <Heading fontWeight="normal" pl="2">EasyFood</Heading>
                                </Flex>
                            </Flex>
                            <Stack pt={6} gap="4" color={"fg.muted"} >
                                {items.map((item, index) => (
                                    <ChakraLink
                                        key={index}
                                        {...cleanLink}
                                        asChild
                                    >
                                        <NextLink href={item.link}>
                                            <Flex
                                                align="center"
                                                gap="3"
                                                p="2"
                                                borderRadius="md"
                                                cursor="pointer"
                                                _hover={{ bg: "bg.subtle", color: "blue.400" }}
                                            >
                                                <Icon fontSize="xl">{item.icon}</Icon>
                                                <Text fontSize="sm" fontWeight="medium">{item.title}</Text>
                                            </Flex>
                                        </NextLink>
                                    </ChakraLink>
                                ))}
                            </Stack>
                        </Box>
                        <Text textStyle="sm" p={2}>
                            <ChakraLink
                                {...cleanLink}
                                asChild>
                                <NextLink href='/login'>
                                    <Icon>
                                        <MdLogout />
                                    </Icon>
                                    Sair
                                </NextLink>
                            </ChakraLink>
                        </Text>
                    </Stack>
                </Box>
                <Box flex="1" overflowY="auto" px={6} py={10} >
                    {children}
                </Box>
            </Box>
        </div >
    )
}
const items = [

    {
        value: "a",
        title: "Pedidos",
        text: "Criar Pedido",
        icon: <MdShoppingCart />,
        link: '/orders'
    },
    {
        value: "b",
        title: "Produtos",
        text: "Ver Produtos",
        icon: <MdFastfood />,
        link: '/products'
    },
    {
        value: "c",
        title: "Categoria",
        text: "Criar Categoria",
        icon: <MdCategory />,
        link: '/categoria'
    },

    {
        value: "d",
        title: "Dashabord",
        text: "Métricas",
        icon: <MdDashboard />,
        link: '/dashabord'
    },
    {
        value: "e",
        title: "Configurações",
        text: "Editar Config",
        icon: <MdSettings />,
        link: '/config'
    },
];

const cleanLink = {
    border: "none",
    textDecoration: "none",
    _hover: { textDecoration: "none", color: "blue.600" },
    _active: { textDecoration: "none" },
    _focus: { boxShadow: "none", outline: "none" },
    _focusVisible: { boxShadow: "none", outline: "none" },
}
