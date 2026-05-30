// api/persist/storage.ts

import { get, set, del } from 'idb-keyval'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';

export const idbPersister = createAsyncStoragePersister({
  storage: {
    getItem: async (key) => {
      const value = await get<string>(key)
      return value ?? null
    },

    setItem: async (key, value) => {
      await set(key, value)
    },

    removeItem: async (key) => {
      await del(key)
    },
  },

  key: 'PRODUCTS_QUERY_CACHE',

  throttleTime: 1000,
})