import { useBTCPay } from 'hooks'

export const HistoryPage: React.FC = () => {
	const { getInvoices } = useBTCPay()
	return <div onClick={() => console.log(getInvoices())}>HistoryPage</div>
}
