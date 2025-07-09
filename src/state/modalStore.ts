import { ReactNode } from "react";
import { create } from "zustand";

export interface ModalState {
  visible: boolean;
  content: ReactNode | null;
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  visible: false,
  content: null,
  showModal: (content) => set({ visible: true, content }),
  hideModal: () => set({ visible: false, content: null }),
})); 

   