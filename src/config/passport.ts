import passport from 'passport'
import passportLocal from 'passport-local'
import GoogleTokenStrategy from 'google-passport-id-token'
import { JWTStrategy } from 'passport-jwt'
import { Request, Response, NextFunction } from 'express'

// const LocalStrategy = passportLocal.Strategy

export const googleStrategy = new GoogleTokenStrategy(
  {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  (parsedToken: any, googleId: any, done: any) => {
    console.log('pasrsed Token', parsedToken),
      // 2 arguments; error and the data you want to forward
      done(null, {})
  }
)
