import { userRoles } from '../enums'
import { IauthenticatedUser } from '../interfaces'

export const nonAuthenticatedUser: IauthenticatedUser = {
	_id: '',
	email: '',
	authenticated: false,
	role: userRoles.shopOwner,
	store: {
		id: ''
	}
}