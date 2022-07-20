import BTCPayService from '../../shared/api/services/BTCPayService'

export const StartPaymentPage: React.FC = () => {
	const omg = async () => {
		try {
			const { data } = await BTCPayService.getStores()
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<h1>1. Skapa QR kod för att ta emot betalning med Bitcoin Lightning</h1>
			<h1>2. Bekräfta att betalningen har utförts</h1>
			<h1>3. Betalningen är färdig: Visa bekräftelsemodal samt erbjud kvitto via email</h1>
			<form method='POST' action='https://mainnet.demo.btcpayserver.org/apps/333un3KiRJaTZjPPx1VrH7BoRKU9/pos'>
				<input type='hidden' name='amount' value='100' />
				<input type='hidden' name='email' value='customer@example.com' />
				<input type='hidden' name='orderId' value='CustomOrderId' />
				<input type='hidden' name='notificationUrl' value='https://example.com/callbacks' />
				<input type='hidden' name='redirectUrl' value='https://example.com/thanksyou' />
				<button type='submit'>Buy now</button>
				<h1 onClick={() => omg()}>LOOOL</h1>
			</form>
		</div>
	)
}
