import Axios from 'axios'

const enviroment = 'development'

const determineBaseURL = () => {
	const baseURLPROD = 'https://mainnet.demo.btcpayserver.org'
	const baseURLDEV = 'https://testnet.demo.btcpayserver.org'
	return enviroment === 'development' ? baseURLDEV : baseURLPROD
}

const determineHeader = () => {
	const tokenPROD = 'a8a0eef0e5c8ad48972d0fa5e43fe1a3b57f494c'
	const tokenDEV = '7906a38a728886af05efeb8de44e46bebccb0750'
	return enviroment === 'development' ? `token ${tokenDEV}` : `token ${tokenPROD}`
}

const BitupAPI = Axios.create({
	baseURL: determineBaseURL(),
	headers: {
		'Authorization': determineHeader()

	}
})

export default BitupAPI