import express, { Request, Response } from 'express'
import passport from 'passport'

const router = express.Router()
router.post(
  '/',
  passport.authenticate('google-id-token', { session: false }),
  (req: Request, res: Response) => {
    res.json('login successful')
  }
)
export default router
