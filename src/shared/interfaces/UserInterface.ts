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

export interface IpersonalDetails {
  firstName?: string,
  lastName?: string,
  country?: string,
  address?: string,
  zipCode?: string,
  phone?: string,
}