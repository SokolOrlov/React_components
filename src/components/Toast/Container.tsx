import React from "react";
import ReactDOM from "react-dom";
import ToastStore from "./Store";

import ToastList from "./ToastList";

export const ToastContainer = () => {
  return ReactDOM.createPortal(<ToastList />, document.getElementById("toast") as HTMLElement);
};

export const useToast = () => {
  return ToastStore((state) => state.toast);
};
