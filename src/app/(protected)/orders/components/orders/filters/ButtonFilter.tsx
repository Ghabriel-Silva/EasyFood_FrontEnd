import { Button, ButtonGroup, Icon } from "@chakra-ui/react"
import { MdFilterListAlt } from "react-icons/md";


interface PropsIsLoadingButton {
    isLoading: boolean
}
export const ButtonFilter = ({ isLoading }: PropsIsLoadingButton) => {

    return (
        <ButtonGroup colorPalette="blue" size={'sm'}>
            <Button loading={isLoading} loadingText="Buscando dados..." type="submit">
                Filtrar Consulta
                <Icon><MdFilterListAlt /></Icon>
            </Button>
        </ButtonGroup>
    )
}
