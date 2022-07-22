import { IcreateAccount, IloginCredentials } from '../../interfaces'
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

export default {
	login,
	createAccount,
	retrieveLostAccount
}
