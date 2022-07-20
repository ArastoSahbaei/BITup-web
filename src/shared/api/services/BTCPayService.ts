import http from '../BTCPayAPI'


const getStores = () => {
	return http.get('/stores')
}

export default {
	getStores
}