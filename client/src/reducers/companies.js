/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ALL_COMPANIES, CREATE } from '../constants/actionTypes'


export default (companies = [], action) => {
  switch (action.type) {
    case FETCH_ALL_COMPANIES:
      return action.payload
    case CREATE:
      return [ ...companies, action.payload]  
    default:
      return companies
  }
}
