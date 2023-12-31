import express from 'express'
import lusca from 'lusca'
import dotenv from 'dotenv'
import cors from 'cors'

import movieRouter from './routers/movie'
import customerRouter from './routers/customer'
import orderRouter from './routers/order'
import productRouter from './routers/product'
import googleLoginRouter from './routers/login'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import compression from 'compression'

import passport from 'passport'
import { googleStrategy, jwtStrategy } from './config/passport'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.use(cors())
app.set('port', process.env.PORT || 3000)
app.use(apiContentType)
// Use common 3rd-party middlewares
app.use(compression())
app.use(express.json())
app.use(lusca.xframe('SAMEORIGIN'))
app.use(lusca.xssProtection(true))
app.use(passport.initialize())
app.use(passport.session())

// passportStrategy
passport.use(googleStrategy)
passport.use(jwtStrategy)

// routers
app.use('/api/v1/movies', movieRouter)
app.use('/api/v1/customer', customerRouter)
app.use('/api/v1/order', orderRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/google/login', googleLoginRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
