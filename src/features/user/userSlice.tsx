import { createSlice } from "@reduxjs/toolkit";

const getUserFromLocalStorage = () => {
  return typeof window !== "undefined"
    ? JSON.parse(window.localStorage.getItem("user") || "[]")
    : false;
};

const initialState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = getUserFromLocalStorage();
      const userData = { ...action.payload };

      if (user.length === 0) {
        alert("user doesnt exist. Please registrate first");
        return;
      }

      if (
        user?.email !== userData?.email ||
        user?.password !== userData?.password
      ) {
        alert("Email or password is incorrect");
        return;
      }
    },
    registrationUser: (state, action) => {
      const user = { ...action.payload };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      console.log("logout");
    },
  },
});

export const { loginUser, logoutUser, registrationUser } = userSlice.actions;

export default userSlice.reducer;
