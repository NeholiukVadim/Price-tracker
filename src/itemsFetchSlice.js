import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    itemsList: [],
    category: "currency",
    league: "Crucible",
    priceFilterState: "unset",
    trendFilterState: "unset",
    itemsNamesFilterState: "unset"
}

export const fetchItems = createAsyncThunk(
  'fetchedList/fetchItems',
    async (ParamData) => {
        const {category, league} = ParamData
        const response = await axios.get(`https://api.poe.watch/get?category=${category}&league=${league}`)
        return response
    }
);

export const itemsListSlice = createSlice({
    name: 'fetchedList',
    initialState,
    reducers: {
        changeCategory: (state, action) => {
            state.category = action.payload;
        },
        changeLeague: (state, action) => {
            state.league = action.payload;
        },
        sortByPrice: (state) => {
            state.itemsNamesFilterState = "unset"
            state.trendFilterState = "unset"
            if (state.priceFilterState === "decrease" || state.priceFilterState === "unset") {
                state.priceFilterState = "increase"
                state.itemsList.sort((a, b) => {return a.mean - b.mean})
            }
            else {
                state.priceFilterState = "decrease"
                state.itemsList.sort((a, b) => {return b.mean - a.mean})
            }
        },
        sortByTrend: (state) => {
            state.itemsNamesFilterState = "unset"
            state.priceFilterState = "unset"
            if (state.trendFilterState === "decrease") {
                state.trendFilterState = "increase"
                state.itemsList.sort((a, b) => {return a.change - b.change})
            }
            else {
                state.trendFilterState = "decrease"
                state.itemsList.sort((a, b) => {return b.change - a.change})
            }
        },
        sortByItemName: (state) => {
            state.priceFilterState = "unset"
            state.trendFilterState = "unset"
            if (state.itemsNamesFilterState === "decrease") {
                state.itemsNamesFilterState = "increase"
                state.itemsList.sort ((a, b) => {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)})
            }
            else {
                state.itemsNamesFilterState = "decrease"
                state.itemsList.sort((a, b) => {return (b.name > a.name) ? 1 : ((a.name > b.name) ? -1 : 0)})
            }
        },
    },
    extraReducers: {
        [fetchItems.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.itemsList = action.payload.data.sort((a, b) => {return b.mean - a.mean});
            console.log(state.itemsList)
            state.priceFilterState = "unset";
            state.trendFilterState = "unset";
            state.itemsNamesFilterState = "unset";
        },
    }
})

export const { changeCategory, changeLeague, sortByPrice, sortByTrend, sortByItemName } = itemsListSlice.actions

export default itemsListSlice.reducer