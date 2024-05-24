import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Mock Data
const mockList = Array.from({ length: 12 }, (_, i) => {
  return {
    _id: uuidv4(),
    date: new Date().getTime() + 10000000 * i,
    content:
      "Nulla eiusmod ut aute anim ut velit velit. Aliqua ea magna ut et pariatur magna sit exercitation mollit ipsum labore laborum et non. Officia duis nostrud sint laboris id cupidatat consequat laboris adipisicing duis. Mollit ad esse amet in excepteur reprehenderit culpa. Exercitation sunt labore mollit cillum excepteur tempor adipisicing. Veniam veniam consequat deserunt ut cupidatat aute et irure ex tempor velit deserunt tempor. Ex proident quis aliqua esse enim elit labore magna in labore ad est id.",
  };
}).sort((a, b) => a.date - b.date);

// const getDefaultId = () => ;

// Memo에 관련된 State를 저장
const memoSlice = createSlice({
  name: "memoSlice",
  initialState: {
    memoList: mockList,
    currMemoId: mockList[0]._id,
  },
  reducers: {
    setMemoId: (state, action) => {
      state.currMemoId = action.payload;
    },
  },
});

export { memoSlice };
export const { setMemoId } = memoSlice.actions;
