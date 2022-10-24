import { createSlice } from "@reduxjs/toolkit";

const users = [
  {
    name: "Jhon Doe",
    email: "Jhon@Doe.com",
    profile: 0,
    state: 1,
    date: "22/10/2022",
    action: 0,
  },
];

export const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    users,
  },
  reducers: {
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
      const usersFound = state.users.filter(
        (user) => user.profile !== action.payload.profile
      );
      state.users = usersFound;
    },
    editUser: (state, action) => {
      state.isLoading = true;
      state.users = action.payload.users;
    },
  },
});

export const { addUser, deleteUser, editUser, startLoading, setUsers } =
  userSlice.actions;

export default userSlice.reducer;
