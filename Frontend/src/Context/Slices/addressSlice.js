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
        },
        removeAddress(state , action){
            state.item = []
        }
    }
})

export const {setAddress , removeAddress} = addressSlice.actions

export default addressSlice.reducer