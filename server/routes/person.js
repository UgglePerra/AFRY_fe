import express from 'express'
import { getPersons, createPerson, disassociatePerson, associatePerson } from '../controllers/person.js'


const router = express.Router()

// Map HTTP verbs and route paths to controller action methods.
router.get('/', getPersons)
router.post('/', createPerson)
router.patch('/:id/disassociate', disassociatePerson)
router.patch('/:id/associate', associatePerson)

export default router
