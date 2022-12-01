import { FETCH_ALL_COMPANIES, CREATE } from '../constants/actionTypes'
import * as api from '../api'


export const getCompanies = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCompanies()
    dispatch({ type: FETCH_ALL_COMPANIES, payload: data }, [])
  } catch (error) {
    console.log(error)
  }
}

export const createCompany = (company) => async (dispatch) => {
  try {
    const { data } = await api.createCompany(company)
    dispatch({ type: CREATE, payload: data }, [])
  } catch (error) {
    console.log(error)
  }
}
