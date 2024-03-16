import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as interFace from '../../Config/interface.config';
import APIRequest from '../../API';
import * as APIPATHS from '../../API/path';
import toast from 'react-hot-toast';

const initialState: interFace.PostDetails = {
  posts: [],
  feed: {
    limit: 10,
    page: 1,
    results: [],
    totalPages: 1,
    totalResults: 1
  },
  loading: false,
};


export const createNewPost = createAsyncThunk<any, interFace.Post>(
  'post/create-new-post',
  async (postData, { rejectWithValue }) => {
    try {
      toast.loading('Creating new post...');
      const response: any = await APIRequest(APIPATHS.createPost, postData);
      toast.remove()
      toast.success('Post created successfully', {duration: 3000})
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message ?? error.response.data);
    }
  }
);

export const feedHandler = createAsyncThunk<any, { limit: number, page: number }>(
  'post/feed',
  async (data, { rejectWithValue, getState }) => {
    try {

      toast.loading('Preparing your feed...');
      const response: any = await APIRequest(APIPATHS.myFeed, {}, { ...data });
      toast.remove()
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message ?? error.response.data);
    }
  }
);

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
        state.feed.results.unshift(action.payload);
        state.loading = false;
      })
      .addCase(createNewPost.rejected, (state, action) => {
        state.loading = false;
      });

    builder
      .addCase(feedHandler.pending, (state) => {
        state.loading = true;
      })
      .addCase(feedHandler.fulfilled, (state, action) => {
        state.feed = action.payload;
        state.loading = false;
      })
      .addCase(feedHandler.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default postSlice.reducer;
