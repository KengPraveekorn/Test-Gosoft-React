import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  currentlyEdited: null,
  items: [],
  // currentlyEdited: {
  //   id: null,
  //   layout: null,
  //   values: {},
  // },
  // items: [
  //   {
  //     id: null,
  //     layout: null,
  //     values: {},
  //   },
  // ],
};

export const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    addComponent: (state, action) => {
      const { id, layout } = action.payload;

      const newComponent = {
        id,
        layout,
        values: {},
      };

      state.currentlyEdited = newComponent;
      state.items.push(newComponent);
      // (state.currentlyEdited.id = action.payload.id),
      //   (state.currentlyEdited.layout = action.payload.layout),
      //   (state.currentlyEdited.values = action.payload.values || {}),
      //   state.items = [{ id: action.payload.id,layout: action.payload.layout, values: action.payload.values || {}}]
    },
    updateComponent: (state, action) => {
      (state.currentlyEdited = null),
        (state.items = state.items.map((n) => {
          if (n.id === action.payload.id) {
            return {
              id: n.id,
              layout: n.layout,
              values: action.payload.data.values,
            };
          } else {
            return n;
          }
        }));
    },

    removeComponent: (state, action) => {
      (state.currentlyEdited = null),
        (state.items = state.items
          .filter((n) => n.id !== action.payload.id)
          .map((item) => item));
    },

    setEditedComponent: (state, action) => {
      state.currentlyEdited = state.items.filter(
        (n) => n.id === action.payload.component.id
      )[0];
    },
  },
});



 export const componentsActions = componentsSlice.actions;
 export const componentsReducer = componentsSlice.reducer;
