import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    item : [],
}

const addressSlice = createSlice({
    name : 'address',
    initialState,
    reducers : {
        setAddress(state , action){
            state.item = action.payload
        }
    }
})

export const {setAddress} = addressSlice.actions

export default addressSlice.reducer