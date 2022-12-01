import express from 'express'
import { getCompanies, createCompany } from '../controllers/company.js'


const router = express.Router()

// Map HTTP verbs and route paths to controller action methods.
router.get('/', getCompanies)
router.post('/', createCompany)

export default router
