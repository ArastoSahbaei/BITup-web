import http from '../BTCPayAPI'

const getStores = () => {
	return http.get('/api/v1/stores')
}

const createInvoice = (storeID: string) => {
	return http.get(`/api/v1/stores/${storeID}/invoices`)
}

export default {
	getStores,
	createInvoice
}