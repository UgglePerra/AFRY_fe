/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ALL_PERSONS, CREATE, DISASSOCIATE_ONE, ASSOCIATE_ONE } from '../constants/actionTypes'


export default(persons = [], action) => {
  switch (action.type) {
    case FETCH_ALL_PERSONS:
      return action.payload
    case CREATE:
      return [ ...persons, action.payload]  
    case DISASSOCIATE_ONE:
      return persons.map((person) => (person._id === action.payload._id ? action.payload : person))  
    case ASSOCIATE_ONE:
      return persons.map((person) => (person._id === action.payload._id ? action.payload : person)) 
    default:
      return persons
  }
}
