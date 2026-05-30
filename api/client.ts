// api/client.ts

import { QueryClient } from '@tanstack/react-query'
import { CACHE_MAX_AGE } from './persist'


export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        gcTime: CACHE_MAX_AGE, // same as persisted cache maxAge
        retry: 2,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
      },
      mutations: {
        retry: 0,
      },
    },
  })
}