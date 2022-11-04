import { createSlice } from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits
});

export default tuitsSlice.reducer;