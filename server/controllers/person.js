import express from 'express'
import mongoose from 'mongoose'
import Person from '../models/person.js'


export const getPersons = async (req, res) => {
  try {
    const persons = await Person.find()
    res.status(200).json(persons)
  } catch (error) {
    res.status(404).json({message: error.message })
  }
}

export const createPerson = async (req, res) => {
  // Check1: Number of characters >=1 for both firstname and surname
  if(req.body.firstname.length > 0 && req.body.surname.length > 0) {
    const persons = await Person.find()
  const person = req.body
  const newPerson = new Person(person)
  let alreadyCreated = false
  for (let i = 0; i < persons.length; i++) {
    if(person.firstname === persons[i].firstname && person.surname === persons[i].surname) alreadyCreated = true
  }
  //Check2: Avoid duplicates
  if(alreadyCreated === false)
    try {
      await newPerson.save()
      res.status(201).json(newPerson)
    } catch (error) {
      res.status(409).json({ message: error.message })
    }
  }
}

export const disassociatePerson = async (req, res) => {
  const { id } = req.params
  try {
    const updatedPerson = await Person.findByIdAndUpdate(id, { company: '' })
    res.status(200).json(updatedPerson)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
 
}

export const associatePerson = async (req, res) => {
  const { id } = req.params
  const company   = Object.keys(req.body)[0] || ''
  try {
    const updatedPerson = await Person.findByIdAndUpdate(id, { company: company })
    res.status(200).json(updatedPerson)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
