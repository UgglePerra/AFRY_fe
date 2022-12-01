import axios from 'axios'


const urlP = 'http://localhost:5000/person'
export const fetchPersons = () => axios.get(urlP)
export const createPerson = (newPerson) => axios.post(urlP, newPerson)
export const disassociatePerson = (id) => axios.patch(`${urlP}/${id}/disassociate`)
export const associatePerson = (id, selectedCompanyName) => axios.patch(`${urlP}/${id}/associate`, selectedCompanyName)

const urlC = 'http://localhost:5000/company'
export const fetchCompanies = () => axios.get(urlC)
export const createCompany = (newCompany) => axios.post(urlC, newCompany)
