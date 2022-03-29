import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase.config";

const initialState = {
  isMenuOpen: false,
  work: [],
  allCatagory: [],
};

export const getAllProjects = () => async (dispatch) => {
  const querySnapshot = await getDocs(collection(db, "allProject"));
  const work = [];
  querySnapshot.forEach((doc) => {
    work.push({ id: doc.id, ...doc.data() });
  });

  dispatch(setProjects(work));
};

export const getallCategory = () => async (dispatch) => {
  const querySnapshot = await getDocs(collection(db, "catagory"));
  const catArray = [];
  querySnapshot.forEach((doc) => {
    catArray.push({ id: doc.id, ...doc.data() });
  });

  dispatch(setAllCategory(catArray.reverse()));
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setProjects: (state, { payload }) => {
      state.work = payload;
    },
    setAllCategory: (state, { payload }) => {
      state.allCatagory = payload;
    },
  },
});

export const { toggleMenu, setProjects, setAllCategory } = generalSlice.actions;
export default generalSlice.reducer;
