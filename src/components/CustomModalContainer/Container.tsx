import React from "react";
import ReactDOM from "react-dom";
import ObjectModal from "./ObjectModal";
import CustomModalStore from "./Store"; 

export const CustomModalContainer = React.memo(() => {
  return ReactDOM.createPortal(<ObjectModal />, document.getElementById("modal") as HTMLElement);
});

type Props = {
  add: (callback: () => void) => void;
  edit: (id: number, callback: () => void) => void;
  close: () => void;
  callback: () => void;
};

export const useCustomModal = (): Props => {
  return CustomModalStore((state) => state);
};
