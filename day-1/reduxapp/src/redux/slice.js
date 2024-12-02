import {createSlice} from '@reduxjs/toolkit'

const postslice = createSlice({
    name:'counters',
    initialState:{count:0},
        
        reducers:{
            incrimenting:((state,action)=>{
                state.count+=1
            }),
        },

        

})
export const {incrimenting}=postslice.actions;
export default postslice.reducer;