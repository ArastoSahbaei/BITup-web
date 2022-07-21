export interface IauthenticatedUser {
  _id: string
  email: string
  authenticated: boolean
  storeID: string
  role: string
}

export interface IloginCredentials {
  email: string
  password: string
}

export interface IcreateAccount {
  email: string
  storeID: string,
  personalDetails: IpersonalDetails
}

interface IpersonalDetails {
  firstName: string,
  lastName: string,
  country: string,
  address: string,
  secondaryAdress: string,
  zipCode: string,
  phone: string,
  secondaryPhone: string
}