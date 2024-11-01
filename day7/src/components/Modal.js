import React, { forwardRef } from "react";

const Modal = forwardRef(({ children, func }, ref) => {
  return (
    <div>
      <button onClick={func}>dialog</button>
      <dialog ref={ref} className="modal">
        {children}
      </dialog>
    </div>
  );
});

export default Modal;
