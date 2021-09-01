import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface USER {
  displayName: string;
  photoUrl: string;
}
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {uid:"", photoUrl: "", displayName:""}
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = {uid:"", photoUrl: "", displayName:""};
    },
    updateUserProfile: (state, action: PayloadAction<USER>) =>{
      state.user.displayName = action.payload.displayName;
      state.user.photoUrl = action.payload.photoUrl;
    },
  },
});

export const { login, logout, updateUserProfile } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state: RootState) => state.user.user;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default userSlice.reducer;
