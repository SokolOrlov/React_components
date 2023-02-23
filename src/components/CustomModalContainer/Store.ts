import { create } from "zustand";

type Props = {
  show: boolean;
  id: number | null;
  add: (callback: () => void) => void;
  edit: (id: number, callback: () => void) => void;
  close: () => void;
  callback: () => void;
};

const CustomModalStore = create<Props>((set) => ({
  show: false,
  id: null,
  test: false,
  add: (callback: () => void) =>
    set(() => {
      return { show: true, callback: callback };
    }),
  edit: (id: number, callback: () => void) =>
    set(() => {
      return { show: true, id: id, callback: callback };
    }),
  close: () =>
    set(() => {
      return { show: false };
    }),
  callback: () => {},
}));

export default CustomModalStore;
