import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const THEMES = {
  dark: "dark",
  light: "light",
};

const useThemeStore = create(
  persist(
    (set) => ({
      theme: THEMES.light,
      setTheme: (theme) => {
        if (THEMES[theme]) {
          set({ theme });
        }
      },
      toggleTheme: () => {
        set((state) => ({
          theme: state.theme === THEMES.light ? THEMES.dark : THEMES.light,
        }));
      },
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export { THEMES, useThemeStore };
