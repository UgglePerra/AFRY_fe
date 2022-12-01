import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import personRoutes from './routes/person.js'
import companyRoutes from './routes/company.js'


// Create an Express application.
const app = express()

// Parse requests of the content type application/json.
app.use(express.json({ limit: "30mb", extended: true }))

// Parse requests of the content type application/x-www-form-urlencoded.
app.use(express.urlencoded({ limit: "30mb", extended: true }))

// Enable CORS middleware.
app.use(cors())

// Register routes.
app.use('/person', personRoutes)
app.use('/company', companyRoutes)

const CONNECTION_URL = 'mongodb+srv://pertimborn:DOS500dos@cluster0.fjzoqf2.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

// Connect to MongoDB Cloud.
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)
