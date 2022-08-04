import Axios from 'axios'

const determineBaseURL = () => {
	const devURL = 'http://localhost:3001'
	const prodURL = 'https://transbit-server.herokuapp.com'
	const isDev = process.env.REACT_APP_ENVIROMENT === 'DEVELOPMENT'
	return isDev ? devURL : prodURL
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