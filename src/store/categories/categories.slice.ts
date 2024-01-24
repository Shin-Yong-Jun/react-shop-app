import { CategoriesName } from "./categories.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState = CategoriesName.All; 

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActiveCategory: (_, action: PayloadAction<CategoriesName>) => 
      action.payload,
  }
});

export const { setActiveCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;