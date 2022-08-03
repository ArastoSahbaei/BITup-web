import { toast } from 'react-toastify'
import BTCPayService from 'shared/api/services/BTCPayService'
import { useAuthentication } from './useAuthentication'

export const useBTCPay = () => {
	const { authenticatedUser } = useAuthentication()

	const createInvoice = async (amount: string) => {
		try {
			const { data } = await BTCPayService.createInvoice(authenticatedUser.store.id, amount)
			window.open(data.checkoutLink)
			console.log(data)
		} catch (error) {
			toast.error('Det uppstod ett fel!')
			console.log(error)
		}
	}

	const getStores = async () => {
		try {
			const { data } = await BTCPayService.getStores()
			console.log(data)
		} catch (error) {
			toast.error('Det uppstod ett fel!')
			console.log(error)
		}
	}

	return {
		createInvoice,
		getStores,
	}
}
