import Axios from 'axios'

const baseURL = 'http://localhost:3001'
const BitupAPI = Axios.create({
	baseURL: baseURL,
	headers: { 'Content-Type': 'application/json' }
})

export default BitupAPI