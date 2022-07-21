export interface IauthenticatedUser {
  _id: string
  email: string
  authenticated: boolean
  storeID: string
}

export interface IloginCredentials {
  email: string
  password: string
}