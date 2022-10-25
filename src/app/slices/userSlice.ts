import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  isLoading: boolean;
  users: Array<{}>;
  profiles: Array<{ id: number; name: string }>;
}

export const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
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
    addUser: (state, action) => {
      state.isLoading = true;
      state.users = action.payload.users;
    },
    deleteUser: (state, action) => {
      state.isLoading = true;
      // const usersFound = state.users.filter(
      //   (user) => user.profiles !== action.payload.profile
      // );
      // state.users = usersFound;
    },
    editUser: (state, action) => {
      state.isLoading = true;
      state.users = action.payload.users;
    },
  },
});

export const {
  addUser,
  deleteUser,
  editUser,
  startLoading,
  setUsers,
  setProfiles,
} = userSlice.actions;

export default userSlice.reducer;
