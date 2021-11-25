import express, { Request, Response } from 'express'
import passport from 'passport'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './../util/secrets'

const router = express.Router()

type CustomerDocument = {
  name: string
  given_name: string
  family_name: string
  email: string
  picture: string
  address: string
  order: string
  Product: string
}

type Customer = {
  customer: string
}
router.post(
  '/',
  passport.authenticate('google-id-token', { session: false }),
  (req: Request, res: Response) => {
    const customerData = req.user as CustomerDocument

    const token = jwt.sign({ customerData }, JWT_SECRET, { expiresIn: '0.5h' })
    console.log('customer', customerData)
    res.json({ token: token })
  }
)
export default router
