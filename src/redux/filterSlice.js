import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    organizer: null,
    speciality: null,
    period: [],
  },
  reducers: {
    saveOrganizer(state, action) {
      state.organizer = action.payload;
    },
    saveSpeciality(state, action) {
      state.speciality = action.payload;
    },
    savePeriod(state, action) {
      state.period = action.payload;
    },
  },
});

export const { saveOrganizer, saveSpeciality, savePeriod } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
