import React, { useState } from "react";
import { Col, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteNewNotes } from "../slice/notesSlice";
import EditNotes from "./EditNotes";
const NotesCard = (props) => {
  const dispatch = useDispatch();
  const note = props.noteInfo;
  const deleteNote = (e) => {
    e.preventDefault();
    dispatch(deleteNewNotes(note.id));
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="edmodalhead" closeButton>
          <Modal.Title className="modaltitle">Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditNotes noteInfo={props.noteInfo} closeModal={handleClose} />
        </Modal.Body>
      </Modal>
      <Col sm="12" md="6" lg="4" xl="3">
        <div className="cardd">
          <div className="closetab">
            <span className="dateinfo">{props.noteInfo.date}</span>
            <i class="bx bxs-x-circle ctbuti" onClick={deleteNote}></i>
          </div>
          <div className="notestab">
            <h5 className="headd">{props.noteInfo.title} </h5>
            <p className="notesp">{props.noteInfo.des}</p>
          </div>
          <div className="editbt">
            <button onClick={handleShow}>
              <i class="bx bx-edit-alt"></i>
            </button>
          </div>
        </div>
      </Col>
    </>
  );
};

export default NotesCard;
