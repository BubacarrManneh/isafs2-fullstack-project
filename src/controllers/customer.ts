import { Request, Response, NextFunction } from 'express'

import Customer from '../models/Customer'
import CustomerService from '../services/customer'
import { BadRequestError } from '../helpers/apiError'

// POST /customers
export const createCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, address, order, Product } = req.body

    const customer = new Customer({
      firstName,
      lastName,
      address,
      order,
      Product,
    })

    await CustomerService.createCustomer(customer)
    res.json(customer)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT /customers/:customerId
export const updateCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const customerId = req.params.customerId
    const updatedCustomer = await CustomerService.updateCustomer(
      customerId,
      update
    )
    res.json(updatedCustomer)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE /customers/:customerId
export const deleteCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await CustomerService.deleteCustomer(req.params.customerId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /customers/:customerId
export const findCustomerById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await CustomerService.findCustomerById(req.params.customerId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /customers
export const findAllCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await CustomerService.findAllCustomer())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
