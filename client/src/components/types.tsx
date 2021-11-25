export type Customer = {
    name: string
    given_name: string
    family_name: string
    email: string
    picture: string
    address: string[]
    order: string[]
    Product: string[]
    role: string
}

export type Product = {
    _id: string
    name: string
    price: number
    category: string
    description: string
    image: string
    variant: string[]
    customer: string[]
}

export type Response = {
    token: string
    customer: Customer
}

export type Loginprops = {
    setCustomer: (customer: Customer) => void
}
