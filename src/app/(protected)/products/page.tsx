import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ProductsPage } from "@/app/(protected)/products/ProductsPage";

export default async function products(){
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value

    if(!token) redirect("/login")

    return <ProductsPage />
}