import type { DehydrateOptions } from '@tanstack/react-query'
 
export const CACHE_MAX_AGE = 1000 * 60 * 60 * 24 // 24 hours
 
export const CACHE_BUSTER = process.env.NEXT_PUBLIC_APP_VERSION ?? '1.0.0'
 
export const dehydrateOptions: DehydrateOptions = {
    shouldDehydrateQuery: (query) => {
        // add any query key roots you want persisted
        const persistedRoots: string[] = ['programs', 'about']
        return persistedRoots.some((root) =>
            (query.queryKey as string[])[0] === root
        )
    },
}