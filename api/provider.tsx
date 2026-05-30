'use client'
 
import { useState } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { makeQueryClient } from './client'
import { idbPersister, CACHE_MAX_AGE, CACHE_BUSTER, dehydrateOptions } from './persist'
 
interface QueryProviderProps {
    children: React.ReactNode
}
 
export function QueryProvider({ children }: QueryProviderProps) {
    const [queryClient] = useState(makeQueryClient)
    return (
        <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{
                persister: idbPersister,
                maxAge: CACHE_MAX_AGE,
                buster: CACHE_BUSTER,
                dehydrateOptions,
            }}
            onSuccess={() => {
                queryClient.resumePausedMutations()
            }}
            onError={() => {
                console.warn('Cache restore failed, starting fresh')
                queryClient.clear()
            }}
        >
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </PersistQueryClientProvider>
    )
}
