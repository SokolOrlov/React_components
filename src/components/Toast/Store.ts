import { create } from "zustand";

export interface ToastMessage {
  label: string;
  type: "none" | "info" | "success" | "error" | "warning";
}

export interface ToastMessageEx extends ToastMessage {
  id: number;
}

type Props = {
  message: ToastMessageEx | null;
  list: ToastMessageEx[];
  toast: ({ label, type }: ToastMessage) => void;
  remove: (id: number) => void
};

const ToastStore = create<Props>((set) => ({
  message: null,
  list: [],
  toast: ({ label, type }: ToastMessage) => set((state)=>{
    const m = { id: Math.random(), label, type };
    return {  message: m, list: [...state.list, m] }}),
  remove: (id: number) => set((state) => ({ list: state.list.filter((i) => i.id !== id) })),
}));

export default ToastStore;