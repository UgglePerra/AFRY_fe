import { FETCH_ALL_PERSONS, CREATE, DISASSOCIATE_ONE, ASSOCIATE_ONE } from '../constants/actionTypes'
import * as api from '../api'


export const getPersons = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPersons()
    dispatch({ type: FETCH_ALL_PERSONS, payload: data }, [])
  } catch (error) {
    console.log(error)
  }
}

export const createPerson = (person) => async (dispatch) => {
  try {
    const { data } = await api.createPerson(person)
    dispatch({ type: CREATE, payload: data }, [])
  } catch (error) {
    console.log(error)
  }
}

export const disassociatePerson = (id) => async (dispatch) => {
  try {
    const { data } = await api.disassociatePerson(id)
    dispatch({ type: DISASSOCIATE_ONE, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const associatePerson = (id, selectedCompanyName) => async (dispatch) => {
  try {
    const { data } = await api.associatePerson(id, selectedCompanyName)
    dispatch({ type: ASSOCIATE_ONE, payload: data })
  } catch (error) {
    console.log(error)
  }
}
