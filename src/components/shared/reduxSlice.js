import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 1,
  searchValue: '',
  previewData: {
    image: '',
    photographer: ''
  },
  loading: false
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updatePageNumber: (state, action) => {
      state.page = action.payload
    },
    updateSearchValue: (state, action) => {
      state.searchValue = action.payload
    },
    updatePreviewData: (state, action) => {
      state.previewData = action.payload
    },
    updateLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
    updatePageNumber, 
    updateSearchValue,
    updatePreviewData,
    updateLoading
} = mainSlice.actions

export default mainSlice.reducer