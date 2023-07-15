import React from "react";
import { Container, Row } from "react-bootstrap";
import NotesCard from "./NotesCard";
import { useSelector } from "react-redux";

const AddNotes = () => {
  const state = useSelector((state) => {
    return state.notesReducer;
  });
  return (
    <Container className="ava">
      <Row style={{ height: "1005" }}>
        {state.notes.length === 0 ? (
          <div className="notnotes">
            <p>No notes available</p>
          </div>
        ) : (
          state.notes.map((note, id) => {
            return <NotesCard noteInfo={note} key={id} />;
          })
        )}
      </Row>
    </Container>
  );
};

export default AddNotes;
