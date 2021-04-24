import React, { useEffect } from "react";

const Modal = ({ modalContent, getModalClosed }) => {
  useEffect(() => {
    setTimeout(() => {
      getModalClosed();
    }, 3000);
  });
  return <div className="modal">{modalContent}</div>;
};

export default Modal;
