import mongoose from 'mongoose'


// Create a schema.
const companySchema = mongoose.Schema({
  companyname: {
    type: String,
    minlength: [1, 'Company name must be at least 1 character'],
    required: true
   }
 })

  // Create a model using the schema. 
const Company = mongoose.model('Company', companySchema)

export default Company
