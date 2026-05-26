import express from 'express'
import { login, logout, register } from '../controllers/auth.controllers.js'
import { userLoginValidator, userRegisterValidator } from '../utils/validators/index.js'
import { validate } from '../middlewares/validator.middleware.js'
import { verifyJwt } from '../middlewares/auth.middleware.js'

const authRoutes = express.Router()

authRoutes.post('/register', userRegisterValidator(), validate, register)
authRoutes.post('/login', userLoginValidator(), validate, login)
authRoutes.post('/logout', verifyJwt, logout)


export default authRoutes