import { InternalServerError, NotFoundError } from "../helper/errors"


export const fetchData = <TData, TVariables>(
    passedUrl: string,
    query: string,
    variables?: TVariables,
    options?: RequestInit['headers'],
): (() => Promise<TData>) => {
    return async () => {
        const res = await fetch(passedUrl, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                ...options,
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        })

        const json = await res.json()

        if (json.errors) {
            console.log(json.errors)
            const { message } = json.errors[0] || ''
            // TODO: [AC-407] doesn't handle bad user input
            if (typeof message === 'string' && message.endsWith('could not be found')) {
                throw new NotFoundError(message || 'NotFoundError')
            } else {
                throw new InternalServerError(message || 'InternalServerError')
            }
        }

        return json.data
    }
}
