import Axios from 'axios'

const baseURL = 'http://localhost:3001'
const BitupAPI = Axios.create({
	baseURL: baseURL,
	headers: { 'Content-Type': 'application/json' }
})

BitupAPI.interceptors.request.use(function (config: any) {
	const token = localStorage.getItem('token')
	config.headers.authorization = token ? `: ${token}` : null
	return config
})

export default BitupAPI