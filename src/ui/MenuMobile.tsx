import { CloseButton, Drawer, Portal, Icon, Box, Text } from "@chakra-ui/react"
import {  useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface  PropsChildrem{
    children: (closeMenu: () => void) => React.ReactNode
}

export const MenuMobile = ({ children }: PropsChildrem) => {

    const [open, setOpen] = useState<boolean>(false)

    //Estado para mudança de open to closet
    function closeMenu() {
        setOpen(false)
    }
    return (
        <Box bg={'bg.muted'}  h={"auto"} py={4} px={6} display={"flex"} flexDirection={"row-reverse"} justifyContent={"space-between"}> 
            <Text color={"red.500"} fontWeight={"bold"}>EasyFood</Text>
            <Drawer.Root placement={"start"} open={open} onOpenChange={(e) => setOpen(e.open)} >
                <Drawer.Trigger asChild   >
                    <Icon size="lg" >
                        <RxHamburgerMenu />
                    </Icon>
                </Drawer.Trigger>
                < Portal >
                    <Drawer.Backdrop />
                    < Drawer.Positioner >
                        <Drawer.Content>
                            <Drawer.Header>
                                <Drawer.Title>Menu</Drawer.Title>
                            </Drawer.Header>
                            < Drawer.Body >
                                {children(closeMenu)}
                            </Drawer.Body>
                            < Drawer.Footer >
                                <Text fontSize="sm" color="gray.500">
                                    Versão 1.0 • EasyFood
                                </Text>
                            </Drawer.Footer>
                            < Drawer.CloseTrigger asChild >
                                <CloseButton size="lg" />
                            </Drawer.CloseTrigger>
                        </Drawer.Content>
                    </Drawer.Positioner>
                </Portal>
            </Drawer.Root>
        </Box>
    )
}