import React, { useEffect } from "react";
import { Svg } from "../Svg/Svg";
import styles from "./Modal.module.css";

type Props = {
  title: string;
  show: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

export const Modal = ({ title, children, show, onClose }: Props) => {
  const closeOnEscapeKeyDown = (e: { charCode: any; keyCode: any }) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  if (!show) return null;

  return(
    <div className={styles.background}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h4>{title}</h4>
          <button onClick={onClose}>
            <Svg id="cross"/>
          </button>
        </header>
        {children}
      </div>
    </div> );
};
