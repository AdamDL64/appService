import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "test 5555+",
  user:[]
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    colorcurrent: (state,action) => {
      state.value = 'red'
      state.colorS= action.payload
    },
    colorout: (state) => {
      state.colorS = []
     
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { colorcurrent, colorout, incrementByAmount } = colorSlice.actions;

export default colorSlice.reducer;