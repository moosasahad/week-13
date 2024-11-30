import {createSlice} from "@reduxjs/toolkit"

const conterslice = createSlice({
    name:'coun',
    initialState:{
        value:0,
    },
    reducers:{
        incriment:((state,action)=>{
            state.value+=1
        }),
    }
}) 

export const {incriment} = conterslice.actions;
export default conterslice.reducer;