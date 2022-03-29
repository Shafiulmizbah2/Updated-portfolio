import { createSlice } from "@reduxjs/toolkit";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const initialState = {
  user: null,
  loading: false,
  error: "",
};

export const Login = (email, password) => async (dispatch) => {
  dispatch(setError(""));
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      dispatch(setUser(user.email));
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      dispatch(setError("You are not an admin"));
      dispatch(removeUser());
    });
};

export const Logout = () => async (dispatch) => {
  const auth = getAuth();
  await signOut(auth)
    .then(() => {
      dispatch(removeUser());
    })
    .catch((error) => {
      dispatch(removeUser());
      console.log(error);
    });
};

export const authStateChange = () => (dispatch) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user.email));
      // ...
    } else {
      dispatch(removeUser());
    }
  });
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      state.user = actions.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    setError: (state, actions) => {
      state.error = actions.payload;
    },
  },
});

export const { setUser, removeUser, setError } = authSlice.actions;
export default authSlice.reducer;
