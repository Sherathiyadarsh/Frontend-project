import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";

const store = configureStore({
    reducer:{
        filter:filterSlice.reducer
    }
})

export default store