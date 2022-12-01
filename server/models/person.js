import mongoose from 'mongoose'


// Create a schema.
const personSchema = mongoose.Schema({
  firstname: {
    type: String,
    minlength: [1, 'First name must be at least 1 character'],
    required: true
   },
   surname: {
    type: String,
    minlength: [1, 'Surname must be at least 1 character'],
    required: true
   },
   company: {
    type: String
  }
 })

// Create a model using the schema.
const Person = mongoose.model('Person', personSchema)

export default Person
