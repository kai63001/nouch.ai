import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// type enum
export interface UserDataSliceWidget {
  username?: string;
  image?: string;
}

const initialState: UserDataSliceWidget = {
  image: "",
  username: "",
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserDataSliceWidget>) => {
      console.log("setUserData", action.payload);
      return action.payload;
    },
  },
});

export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
