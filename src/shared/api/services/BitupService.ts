import { IloginCredentials } from '../../interfaces'
import http from '../BitupAPI'

const login = (data: IloginCredentials) => {
	return http.post('/login', data)
}

export default { login }
