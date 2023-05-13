import FromCreatePromptSlice from './formPromptDataSlice';
import { configureStore } from '@reduxjs/toolkit'
import UserDataSlice from './userDataSlice'

export const store = configureStore({
  reducer: {
    UserDataSlice,
    FromCreatePromptSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch