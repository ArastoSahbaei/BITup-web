import { IcreateAccount, IloginCredentials, IresetPassword } from '../../interfaces'
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

const validateToken = () => {
	return http.post('/validate')
}

export default {
	login,
	validateToken,
	createAccount,
	validateUserEmail,
	retrieveLostAccount,
	resetPasswordWithToken
}
