import { primaryColor } from 'shared/styles/GlobalStyles'
import { SignInForm } from './components/SignInForm'
import { useState } from 'react'
import styled from 'styled-components'

export const SignInPage: React.FC = () => {
	const [recoverAccount, setRecoverAccount] = useState<string>('')

	return (
		<Background>
			<SignInForm />
			<span>Dont have an account? Sign up and get started!</span>
		</Background>
	)
}

const Background = styled.div`
	width: 100%;
	height: 100%;
`

{
	/* 	<h1>forgot password?</h1>
	<input placeholder='email' onChange={(event) => setRecoverAccount(event.target.value)} />
	<button onClick={() => retrieveLostAccount(recoverAccount)}>send recovery</button> */
}
