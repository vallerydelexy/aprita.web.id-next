import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useSessionStore = create(
  persist(
    (set, get) => ({
      data: undefined,
      setSession: (data) => set({ data: data }),
    }),
    {
      name: 'session-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)