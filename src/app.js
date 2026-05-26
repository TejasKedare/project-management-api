import express, { urlencoded } from 'express'
import cors from 'cors'
import { healthCheck } from './controllers/healthcheck.controllers.js'
import authRouter from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'

const app = express()

// basic configuration
app.use(express.json({ limit: "16kb" }))
app.use(urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static('public'))

// cors configuration
app.use(cors())

app.use(cookieParser())
 
app.use("/api/v1/healthcheck", healthCheck)
app.use("/api/v1/auth", authRouter)



export default app