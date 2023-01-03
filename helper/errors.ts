import type { GetStaticPropsResult } from 'next'

export class NotFoundError extends Error {
    constructor(message?: string) {
        super(message)
        this.name = 'NotFoundError'
    }
}

export class InternalServerError extends Error {
    constructor(message?: string) {
        super(message)
        this.name = 'InternalServerError'
    }
}

export function handlePrefetchError<T>(error: unknown | any): GetStaticPropsResult<T> {
    if (error instanceof NotFoundError) {
        return {
            notFound: true,
            revalidate: 600,
        }
    } else {
        throw new InternalServerError(error.message)
    }
}
