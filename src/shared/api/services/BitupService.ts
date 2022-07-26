import { IcreateAccount, IloginCredentials } from '../../interfaces'
import { IresetPassword } from '../../interfaces/UserInterface'
import http from '../BitupAPI'

const createAccount = (data: IcreateAccount) => {
	return http.post('/register', data)
}

const login = (data: IloginCredentials) => {
	return http.post('/login', data)
}

const retrieveLostAccount = (email: string) => {
	return http.post('/retrieveaccount', { email: email })
}

const resetPasswordWithToken = (data: IresetPassword) => {
	return http.post('/resetpassword', data)
}

const validateUserEmail = (token: string) => {
	return http.post('/emailverification', { token: token })
}

export default {
	login,
	createAccount,
	validateUserEmail,
	retrieveLostAccount,
	resetPasswordWithToken
}
