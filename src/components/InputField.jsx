import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addNewNotes } from "../slice/notesSlice";

const InputField = (props) => {
  const dispatch = useDispatch();
  const id = v4();
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");

  const submitChange = (e) => {
    e.preventDefault();
    const newNotes = {
      id,
      date,
      des,
      title,
    };
    dispatch(addNewNotes(newNotes));
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
        <button onClick={submitChange} className="addbut">
          Add Note
        </button>
      </div>
    </Form>
  );
};

export default InputField;
