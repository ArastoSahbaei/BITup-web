export interface IauthenticatedUser {
  _id: string
  email: string
}

export interface IloginCredentials {
  email: string
  password: string
}