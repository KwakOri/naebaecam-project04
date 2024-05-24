import { createSlice } from "@reduxjs/toolkit";

// Mock Data
const mockList = Array.from({ length: 12 }, (_, i) => {
  return {
    _id: i,
    date: new Date().getDate() + 10000 * i,
    content:
      "Nulla eiusmod ut aute anim ut velit velit. Aliqua ea magna ut et pariatur magna sit exercitation mollit ipsum labore laborum et non. Officia duis nostrud sint laboris id cupidatat consequat laboris adipisicing duis. Mollit ad esse amet in excepteur reprehenderit culpa. Exercitation sunt labore mollit cillum excepteur tempor adipisicing. Veniam veniam consequat deserunt ut cupidatat aute et irure ex tempor velit deserunt tempor. Ex proident quis aliqua esse enim elit labore magna in labore ad est id.",
  };
});

const memoSlice = createSlice({
  name: "memoSlice",
  initialState: {
    memoList: mockList,
    currMemoId: "",
  },
  reducers: {
    setMemoId: (state, action) => {
      state.currMemoId = Number(action.payload);
    },
  },
});

export { memoSlice };
