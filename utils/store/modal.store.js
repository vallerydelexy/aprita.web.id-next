import { create } from 'zustand'

const useModalStore = create((set) => ({
  show: false,
  data: {},
  showModal: () => set((state) => ({ show: true })),
  hideModal: () => set((state) => ({ show: false })),
}))

export default useModalStore