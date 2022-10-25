import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  isLoading: boolean;
  switchEvent: boolean;
  users: Array<{}>;
  profiles: Array<{ id: number; name: string }>;
}

export const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    switchEvent: false,
    users: [],
    profiles: [],
  } as UserState,
  reducers: {
    setProfiles: (state, action) => {
      state.isLoading = false;
      state.profiles = action.payload;
    },
    setUsers: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    switchEvent: (state) => {
      state.switchEvent = !state.switchEvent;
    },
  },
});

export const { switchEvent, startLoading, setUsers, setProfiles } =
  userSlice.actions;

export default userSlice.reducer;
