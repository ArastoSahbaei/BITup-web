import BTCPayService from '../shared/api/services/BTCPayService'
import { useAuthentication } from './useAuthentication'

export const useBTCPay = () => {
	const { authenticatedUser } = useAuthentication()

	const createInvoice = async (amount: string) => {
		try {
			const { data } = await BTCPayService.createInvoice(authenticatedUser.storeID, amount)
			window.open(data.checkoutLink)
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	const getStores = async () => {
		try {
			const { data } = await BTCPayService.getStores()
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	return {
		createInvoice,
		getStores,
	}
}
