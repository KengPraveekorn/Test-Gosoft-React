import { configureStore } from '@reduxjs/toolkit'
// import { combineReducers } from 'redux'

import { componentsReducer } from './components'


export const getStore = () => configureStore({
  reducer: {
    components: componentsReducer,
  }
})
