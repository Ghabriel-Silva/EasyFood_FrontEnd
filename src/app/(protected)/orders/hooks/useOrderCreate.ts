import { useQuery } from "@tanstack/react-query";
import { Product } from "../interfaces/porducts";


const fetchData = async (token: string): Promise<Product[]> => {
    const resp = await fetch("http://localhost:8080/product?status=active&price=maior", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    })

    console.log('Chamando a rota para buscar os Produtos')
    const json = await resp.json()
    return json.data
}

export function useOrdersCreate(token: string) {
    return useQuery<Product[]>({
        queryFn: (() => fetchData(token)),
        queryKey: ['product-data', token],
        staleTime: 0,
        refetchOnWindowFocus: true,
    })
}