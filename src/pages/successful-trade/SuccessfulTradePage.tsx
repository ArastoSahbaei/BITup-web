import { useEffect } from 'react'

export const SuccessfulTradePage: React.FC = () => {
	const x = async () => {
		try {
			//CALL BACKEND TO TRIGGER A SELL-ORDER TRANSACTION
			console.log('hello')
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		x()
	}, [])

	return (
		<div>
			<h1>TRADE WAS SUCESSFULL WOOOW</h1>
		</div>
	)
}

// ✅❌
//TODO: ❌ - 1. You get re-direct here after a successful trade. You need to get the trade InvoiceID from the URI params.

//TODO: ❌ - 2. You need to verify that the InvoiceID is true (so people dont mock fake trades) <backend solves this>.

//TODO: ❌ - 3. If the invoiceID is true and does not have a previous sell-order on binance then go to step 5.

//TODO: ❌ - 4. if the invoiceID is false - what to do?

//TODO: ❌ - 5. Call the backend API that calls the Binance API - create a BTC-(USD?) sell order on binance with the amount of the trade.

//TODO: ❌ - 6. If the sell order is successful Re-direct back to page that offers receipt.

//TODO: ❌ - 7. If the sell order is declined - handle it in some way - possibly repeat the process X(3?) times.

// Q: How do I get the data so I know which amount to sell on binance?
