export interface IauthenticatedUser {
  _id: string
  email: string
  authenticated: boolean
}

export interface IloginCredentials {
  email: string
  password: string
}