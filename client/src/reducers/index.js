import { combineReducers } from 'redux'
import personReducer from './persons'
import companyReducer from './companies'


const combinedReducer =  combineReducers({ 
  person: personReducer,
  company: companyReducer 
})

export default combinedReducer
