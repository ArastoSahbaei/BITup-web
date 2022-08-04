import http from '../BitupAPI'

const getInvoices = (storeID: string) => {
	return http.post('/btcpay/invoices', { storeID: storeID })
}

const createInvoice = (storeID: string, amount: string) => {
	return http.post('/btcpay/invoices/create', {
		storeID: storeID,
		amount: amount,
	})
}


export default {
	getInvoices,
	createInvoice
}