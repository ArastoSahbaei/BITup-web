import { IauthenticatedUser } from '../interfaces'

export const nonAuthenticatedUser: IauthenticatedUser = {
	_id: '',
	email: '',
	authenticated: false,
	storeID: ''
}