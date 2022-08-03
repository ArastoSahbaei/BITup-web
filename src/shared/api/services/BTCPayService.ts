import http from '../BitupAPI'

const getInvoices = (storeID: string) => {
	return http.post('/btcpay/invoices', { storeID: storeID })
}

/* const getStores = () => {
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
} */


export default {
	getInvoices
}