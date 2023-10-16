import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './reduxSlice'

export const store = configureStore({
  reducer: {
    main: mainSlice
  },
})