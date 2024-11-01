import React, { useRef } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Timer from "./components/Timer";

function App() {
  const fileRef = useRef();
  const modalRef = useRef();
  function handle() {
    fileRef.current.click();
  }
  function show() {
    modalRef.current.showModal();
  }
  function close() {
    modalRef.current.close();
  }
  function del() {
    modalRef.current.delete();
  }
  return (
    <>
      <input type="file" ref={fileRef} style={{ display: "none" }}></input>
      <button onClick={handle}>upload</button>
      <button onClick={show}>show</button>

      <dialog ref={modalRef} className="dialog1">
        <p>Hai, Click Close!</p>
        <button className="close" onClick={close}>
          &#10006;
        </button>
      </dialog>
      <Modal ref={modalRef} func={show}>
        <p>Hai, Close it!</p>
        <button onClick={close}>&#10006;</button>
      </Modal>
      {/* <button onClick={del}>delete</button> */}
      <Modal ref={modalRef} func={show}>
        <p>Do you want to delete!</p>
        <button onClick={close}>Close</button>
      </Modal>
      <Timer />
    </>
  );
}

export default App;
