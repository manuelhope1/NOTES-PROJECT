import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editNewNotes } from "../slice/notesSlice";

const EditNotes = (props) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(props.noteInfo.date);
  const [title, setTitle] = useState(props.noteInfo.title);
  const [des, setDes] = useState(props.noteInfo.des);
  const note = props.noteInfo;
  const submitChange = (e) => {
    e.preventDefault();
    const newNote = {
      id: note.id,
      date,
      des,
      title,
    };
    dispatch(editNewNotes({ id: note.id, newNote }));
    props.closeModal();
    setTitle("");
    setDes("");
    setDate("");
  };
  return (
    <Form>
      <Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            autoComplete="off"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            value={date}
          />{" "}
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            autoComplete="off"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />{" "}
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label> Description </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="des"
            placeholder="What do you want to keep?"
            autoComplete="off"
            onChange={(e) => {
              setDes(e.target.value);
            }}
            value={des}
          />
        </Form.Group>
      </Row>
      <div style={{ textAlign: "end", background: "#", border: "0" }}>
        <button onClick={submitChange} className="editbut">
          Edit Note
        </button>
      </div>
    </Form>
  );
};

export default EditNotes;
