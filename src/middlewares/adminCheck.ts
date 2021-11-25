import { Request, Response, NextFunction } from 'express'
import { CustomerDocument } from '../models/Customer'
import { ForbiddenError } from '../helpers/apiError'

const adminCheck = (req: Request, res: Response, next: NextFunction) => {
  const customer = req.user as CustomerDocument
  const role = customer.role
  if (role === 'admin') {
    next()
  } else {
    next(new ForbiddenError())
  }
}

export default adminCheck
