import {configureStore} from '@reduxjs/toolkit'
import conterslice from './slice'
export const store = configureStore({
    reducer:{
        coun:conterslice,
    },

})