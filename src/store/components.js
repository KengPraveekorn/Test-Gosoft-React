import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  currentlyEdited: null,
  items: [],
};

export const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    addComponent: (state, action) => {

          return state;
      
    },
    updateComponent: (state, action) => {

          return state;
      
    },
    removeComponent: (state, action) => {

          return state;
      
    },
    setEditedComponent: (state, action) => {

          return state;
      
    },
  },
});

export const componentsActions = componentsSlice.actions;
export const componentsReducer = componentsSlice.reducer;
