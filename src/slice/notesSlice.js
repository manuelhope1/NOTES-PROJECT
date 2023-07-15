import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: [],
};

const notesSlice = createSlice({
    name: "notes",
    initialState: initialState,
    reducers: {
        addNewNotes: (state, action) => {
            state.notes = [...state.notes, action.payload];
        },
        deleteNewNotes: (state, action) => {
            state.notes = state.notes.filter((note) => {
                if (note.id !== action.payload) return note;
            });
        },
        editNewNotes: (state, action) => {
            state.notes = state.notes.map((note) => {
                if (note.id === action.payload.id) return action.payload.newNote;
                return note;
            });
        },
    },
});

export const { addNewNotes, deleteNewNotes, editNewNotes } = notesSlice.actions;
export default notesSlice.reducer;
