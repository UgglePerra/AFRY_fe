import express from 'express'
import mongoose from 'mongoose'
import Company from '../models/company.js'


export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find()
    res.status(200).json(companies)
  } catch (error) {
    res.status(404).json({message: error.message })
  }
}

export const createCompany = async (req, res) => {
  // Check1: Number of characters >=1
  if(req.body.companyname.length > 0) {
    const companies = await Company.find()
    const company = req.body
    const newCompany = new Company(company)
    let alreadyCreated = false
    for (let i = 0; i < companies.length; i++) {
      if(company.companyname === companies[i].companyname) alreadyCreated = true
    }
    //Check2: Avoid duplicates
    if(alreadyCreated === false)
      try {
        await newCompany.save()
        res.status(201).json(newCompany)
      } catch (error) {
        res.status(409).json({ message: error.message })
      }
    }
}
