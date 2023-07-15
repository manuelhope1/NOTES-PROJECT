import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import InputField from "./InputField";

const InputNotes = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {" "}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modall">
          <Modal.Title className="modaltitle">Enter Your Note 📝</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputField closeModal={handleClose} />
        </Modal.Body>
      </Modal>
      <button className="addbox" onClick={handleShow}>
        <i className="bx bx-list-plus add-sign"></i>
      </button>
    </>
  );
};

export default InputNotes;
