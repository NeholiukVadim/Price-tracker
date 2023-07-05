import { configureStore } from '@reduxjs/toolkit'
import fetchedListReducer from './itemsFetchSlice'

export const store = configureStore({
    reducer: {
        fetchedList: fetchedListReducer,
    },
})