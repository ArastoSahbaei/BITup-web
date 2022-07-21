import { useState } from 'react'
import { useBTCPay } from '../../hooks'
import bitcoin from '../../shared/images/bitcoin.png'
import styled from 'styled-components'

export const StartPaymentPage: React.FC = () => {
	const { createInvoice } = useBTCPay()
	const [amount, setAmount] = useState<string>('0.00')

	return (
		<Wrapper>
			<Image src={bitcoin} alt='bitcoin' />
			<input placeholder='pris' onChange={(event) => setAmount(event.target.value)} />
			<button onClick={() => createInvoice(amount)}>create invoice</button>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: absolute;
	width: 100%;
	top: 0;
	height: 100vh;
`

const Image = styled.img`
	width: 100%;
	margin: 0 auto;
	margin-top: 10%;
`
