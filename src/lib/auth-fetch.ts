import 'server-only'
import { cookies } from "next/headers";

export async function authFetch<T>(
    url: string,
    options: RequestInit = {}
): Promise<T> {
    const cookieStore = await cookies(); 
    const token = cookieStore.get("token")?.value;

    if (!token) {
        throw new Error("Unauthorized");
    }

    const res = await fetch(url, {
        ...options,
        headers: {
            ...(options.headers || {}),
            Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Fetch error");
    }

    return res.json();
}
