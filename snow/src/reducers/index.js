import * as types from '../constants/ActionTypes'
import {combineReducers } from 'redux'
import station from './station'
import journalData from './journalData'
import PostSelect from './PostSelect'
const rootReducer = combineReducers({
	station,
	journalData,
	PostSelect
})

export default rootReducer
