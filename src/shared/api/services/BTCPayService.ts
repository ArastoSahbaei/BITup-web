import http from '../BTCPayAPI'

const getStores = () => {
	return http.get('/api/v1/stores')
}

const createInvoice = (storeID: string, amount: string) => {
	return http.post(`/api/v1/stores/${storeID}/invoices`, {
		currency: 'SEK',
		amount: amount,
		checkout: {
			defaultLanguage: 'sv'
		}
	})
}

export default {
	getStores,
	createInvoice
}