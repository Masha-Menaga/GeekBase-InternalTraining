import React, { useRef } from "react";

const Error = () => {
  const fileClose = useRef();

  function close() {
    fileClose.current.close();
  }
  return (
    <div>
      <dialog open ref={fileClose}>
        <p>Page 404 Error</p>
        <button className="close" onClick={close}>
          Close
        </button>
      </dialog>
    </div>
  );
};

export default Error;
