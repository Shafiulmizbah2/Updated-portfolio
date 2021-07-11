import {createSlice} from '@reduxjs/toolkit'

const generalSlice = createSlice({
    name:"general",
    initialState: {
        isMenuOpen : false,
    },
    reducers:{
        toggleMenu : (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        }
    }
})

export const {toggleMenu} = generalSlice.actions;
export default generalSlice.reducer;