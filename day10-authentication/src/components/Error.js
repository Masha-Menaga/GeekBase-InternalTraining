import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  // const fileRef = useRef();
  const navigate = useNavigate();
  function handleClose() {
    // fileRef.current.close();
    navigate("/");
  }
  return (
    <div style={{ margin: "10px", textAlign: "center" }}>
      <dialog open>
        <h2>Page Not Found</h2>

        <h4>404 Error</h4>
        <button
          style={{ position: "absolute", top: "0", right: "0" }}
          onClick={handleClose}
        >
          x
        </button>
      </dialog>
    </div>
  );
};

export default Error;
