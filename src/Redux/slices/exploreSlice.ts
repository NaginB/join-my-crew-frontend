import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as interFace from '../../Config/interface.config';
import APIRequest from '../../API';
import * as APIPATHS from '../../API/path';
import toast from 'react-hot-toast';

const initialState: any = {
  results: [],
  page: 1,
  limit: 10,
  totalPages: 0,
  totalResults: 0,
  loading: false
}


export const fetchExploreList = createAsyncThunk<any>(
  'post/create-new-post',
  async (postData, { rejectWithValue }) => {
    try {
      toast.loading('Creating new post...');
      const response: any = await APIRequest(APIPATHS.exploreList, postData);
      toast.remove()
      if (response.error) throw new Error(response.error.message)
      return response.data;
    } catch (error: any) {
      return rejectWithValue({ reason: error.message ?? error.response.data });
    }
  }
);

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExploreList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExploreList.fulfilled, (state, action) => {
        // state.results.unshift(action.payload);
        Object.assign(state, action.payload)
        state.loading = false;
      })
      .addCase(fetchExploreList.rejected, (state, action: any) => {
        state.loading = false;
        toast.error(action.payload.reason)
      });
  },
});

export default postSlice.reducer;
