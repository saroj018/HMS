import express from 'express'
import dotenv from 'dotenv'
import { globleErrorHandler } from './helper/globleErrorHandler.js'
import { patientRoute } from './route/patientRoute.js'
import cors from 'cors'
import { doctorRoute } from './route/doctorRoute.js'
import { receptionistRoute } from './route/receptionistRoute.js'
dotenv.config()

export const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/patient',patientRoute)
app.use('/api/doctor',doctorRoute)
app.use('/api/receptionist',receptionistRoute)

app.use(globleErrorHandler)