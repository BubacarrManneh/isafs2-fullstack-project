import GoogleTokenStrategy from 'passport-google-id-token'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import { NotFoundError } from '../helpers/apiError'

import CustomerServices from '../services/customer'
import { JWT_SECRET } from '../util/secrets'
import '../models/Customer'
import { CustomerDocument } from '../models/Customer'

export const googleStrategy = new GoogleTokenStrategy(
  {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  async (parsedToken: any, googleId: any, done: any) => {
    console.log('pasrsed Token', parsedToken)

    const customer = await CustomerServices.findCustomerByEmail(
      parsedToken.payload
    )
    done(null, customer)
  }
)

export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload: CustomerDocument, done: any) => {
    const customer = await CustomerServices.findCustomerByEmail(payload)
    done(null, customer)

    if (!customer) {
      throw new NotFoundError(`Customer ${customer} not found`)
    }

    done(null, customer)
  }
)
