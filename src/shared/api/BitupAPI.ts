import Axios from 'axios'

const determineBaseURL = () => {
	const devURL = 'http://localhost:3001'
	const prodURL = 'https://transbit-server.herokuapp.com'
	const isProd = process.env.REACT_APP_ENVIROMENT === 'PRODUCTION'
	return isProd ? prodURL : devURL
}

const BitupAPI = Axios.create({
	baseURL: determineBaseURL(),
	headers: { 'Content-Type': 'application/json' }
})

BitupAPI.interceptors.request.use(function (config: any) {
	const token = localStorage.getItem('token')
	config.headers.authorization = token ? `: ${token}` : null
	return config
})

export default BitupAPI