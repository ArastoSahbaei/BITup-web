import { useState } from 'react'
import { useBTCPay } from '../../../hooks'
import styled from 'styled-components'

export const InitializePaymentPage: React.FC = () => {
	/* const { createInvoice } = useBTCPay() */
	const [amount, setAmount] = useState<string>('0.00')

	return (
		<Wrapper>
			<input placeholder='pris' onChange={(event) => setAmount(event.target.value)} />
			{/* <button onClick={() => createInvoice(amount)}>Create invoice</button> */}
		</Wrapper>
	)
}

const Wrapper = styled.div``

const Image = styled.img`
	width: 100%;
	margin: 0 auto;
	margin-top: 10%;
`
