import BTCPayService from 'shared/api/services/BTCPayService'
import { useAuthentication } from './useAuthentication'
import { toast } from 'react-toastify'

export const useBTCPay = () => {
	const { authenticatedUser } = useAuthentication()

	/* 	const createInvoice = async (amount: string) => {
		try {
			const { data } = await BTCPayService.createInvoice(authenticatedUser.store.id, amount)
			window.open(data.checkoutLink)
			console.log(data)
		} catch (error) {
			toast.error('Det uppstod ett fel!')
			console.log(error)
		}
	} */

	/* 	const getStores = async () => {
		try {
			const { data } = await BTCPayService.getStores()
			console.log(data)
		} catch (error) {
			toast.error('Det uppstod ett fel!')
			console.log(error)
		}
	} */

	const getInvoices = async () => {
		try {
			const { data } = await BTCPayService.getInvoices('dJMYyWacgEUTQTsqpmWpKTiA8jDYABv4NNZuZXXkrxY')
			console.log('data', data)
		} catch (error) {
			toast.error('Det uppstod ett fel!')
			console.log(error)
		}
	}

	return {
		getInvoices,
		/* 	createInvoice,
		getStores, */
	}
}
