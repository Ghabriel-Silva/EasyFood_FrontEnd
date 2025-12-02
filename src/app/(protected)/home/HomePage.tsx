"use client";

import { Box, Heading, Text, Stack} from "@chakra-ui/react";
import Image from "next/image";
import imageBg from "@/assets/bg1.jpg";

export default function HomePage() {
    return (
        <Box w="100%" h="100vh" display="flex">
            <Box flex="1" display="flex" alignItems="flex-start" >
                <Stack align="flex-start" justify={"space-between"}   h={"100%"} w={"100%"}>
                    <Stack pt={16} px={8} gap={5} >
                        <Heading size="5xl" fontWeight="bold" color={"blue.600"}>
                            EasyFood
                        </Heading>
                        <Text textStyle="lg" maxW="500px" color="gray.700" >
                            A ferramenta ideal para controlar pedidos e manter seu negócio funcionando como um relógio.
                        </Text>
                    </Stack>
                    <Stack bg={"bg.subtle"} position={"relative"} w="100%" >
                        <Text textAlign={'center'} textStyle="sm">
                            © {new Date().getFullYear()} • EasyFood — Gestão rápida e confiável
                        </Text>
                    </Stack>
                </Stack>
            </Box>
            <Box flex="2" position="relative">
                <Image
                    src={imageBg}
                    priority
                    alt="bg"
                    fill
                    style={{ objectFit: "cover", filter: "brightness(0.75)" }}
                />
            </Box>
        </Box>
    );
}
