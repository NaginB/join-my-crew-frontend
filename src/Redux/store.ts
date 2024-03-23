import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import postReducer from './slices/postSlice'
import exploreReducer from './slices/exploreSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    posts: postReducer,
    explore: exploreReducer,
    // users: usersReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch