import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// type enum
export interface PromptDataSliceWidget {
  step: number;
  name?: string;
  model?: string;
  version?: string;
  description?: string;
  price?: string;
  image?: File[];
}

const initialState: PromptDataSliceWidget = {
  step: 0,
  name: "",
  model: "",
  version: "",
  description: "",
  price: "",
  image: [],
};

export const fromCreatePromptSlice = createSlice({
  name: "fromCreatePrompt",
  initialState,
  reducers: {
    setFromCreatePrompt: (
      state,
      action: PayloadAction<PromptDataSliceWidget>
    ) => {
      console.log("setFromCreatePrompt", action.payload);
      return action.payload;
    },
  },
});

export const { setFromCreatePrompt } = fromCreatePromptSlice.actions;

export default fromCreatePromptSlice.reducer;
