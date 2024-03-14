import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import * as interFace from "../../Config/interface.config";
import * as PATH from "../../API/path";
import APIRequest from "../../API";
import { AxiosResponse } from "axios";

const initialState: interFace.UserDetails = {
  loading: false,
};

export const getUserDetails = createAsyncThunk(
  "/user/details",
  async (_, { dispatch }) => {
    try {
      const { data }: any = await APIRequest(PATH.userDetails);
      return data;
    } catch (error) {}
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, { payload }: PayloadAction<interFace.UserDetails>) {
      Object.assign(state, payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserDetails.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getUserDetails.fulfilled, (state, { payload }) => {
      Object.assign(state, payload);
      state.loading = false;
    });

    builder.addCase(getUserDetails.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
