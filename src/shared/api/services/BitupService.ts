import http from '../BitupAPI'

const login = (data: any) => {
	return http.post('/login', data)
}

export default { login }
