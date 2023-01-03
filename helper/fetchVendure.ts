import { fetchData } from "../operations/fetchData"


export const fetchVendure = <TData, TVariables>(
    query: string,
    variables?: TVariables,
    options?: RequestInit['headers'],
): (() => Promise<TData>) => {
    const headers: Record<string, string> = {
        ...options as Record<string, string>,
    }

    return fetchData(process.env.NEXT_PUBLIC_GRAPHQL_VENDURE_URL!, query, variables, headers)
}
