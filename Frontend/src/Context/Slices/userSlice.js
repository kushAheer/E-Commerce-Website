import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name :"user",
    initialState :{
        user : JSON.parse(localStorage.getItem('user')) || null,
        
        
    },
    reducers :{
        login : (state,action) =>{
            localStorage.setItem('user',JSON.stringify(action.payload));
            state.user = action.payload;
            
        },
        logout : (state) =>{
            localStorage.removeItem('user');
            state.user = null;
        }
    }

})

export const {login,logout} = userSlice.actions;

export default userSlice.reducer;