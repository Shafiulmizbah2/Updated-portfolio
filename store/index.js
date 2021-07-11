import {configureStore} from "@reduxjs/toolkit"
import genarelReducer from "./generalSlice"
 const store = configureStore({
    reducer : {
        general : genarelReducer,
    }
})

export default store;