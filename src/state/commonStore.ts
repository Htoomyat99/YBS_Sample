import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CommomType {
  // Theme
  isDarkMode: boolean;

  // Modals
  isGlobalModalOpen: boolean;

  // Loading states
  isLoading: boolean;

  // Actions
  toggleTheme: () => void;
  setDarkMode: (isDark: boolean) => void;

  // Modal actions
  openGlobalModal: () => void;
  closeGlobalModal: () => void;

  // Loading actions
  setLoading: (loading: boolean) => void;
}

export const useCommonStore = create<CommomType>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        isDarkMode: false,
        isGlobalModalOpen: false,
        isAddTodoModalOpen: false,
        isEditTodoModalOpen: false,
        selectedTodoId: null,
        isLoading: false,

        // Theme actions
        toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
        setDarkMode: (isDark) => set({ isDarkMode: isDark }),

        // Modal actions
        openGlobalModal: () => set({ isGlobalModalOpen: true }),
        closeGlobalModal: () => set({ isGlobalModalOpen: false }),

        // Loading actions
        setLoading: (loading) => set({ isLoading: loading }),
      }),
      {
        name: "common-store",
        // storage: zustandStorage,
        // partialize: // Persist only state
      }
    )
  )
);
