import { create } from "zustand";

const useThemeStore = create((set) => ({
  mode: "dark",
  setLightMode: () =>
    set((state) => {
      localStorage.theme = "light";
      return { mode: "light" };
    }),
  setDarkMode: () =>
    set((state) => {
      localStorage.theme = "dark";
      return { mode: "dark" };
    }),
}));

export default useThemeStore;
