import { Button } from 'components/common'
import { useState } from 'react'
import { primaryColor } from 'shared/styles/GlobalStyles'
import styled from 'styled-components'
import { useAuthentication } from '../../hooks'
import { IloginCredentials } from '../../shared/interfaces'

export const SignInPage: React.FC = () => {
	const [loginCredentials, setLoginCredentials] = useState<IloginCredentials>({ email: '', password: '' })
	const [recoverAccount, setRecoverAccount] = useState<string>('')
	const { login, retrieveLostAccount } = useAuthentication()

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, target: keyof IloginCredentials) => {
		setLoginCredentials({ ...loginCredentials, [target]: event.target.value })
	}

	return (
		<>
			<Wrapper>
				<span>TransBit</span>
				<input placeholder='email' onChange={(event) => handleChange(event, 'email')} />
				<input placeholder='password' type='password' onChange={(event) => handleChange(event, 'password')} />
				<Button text={'Logga in'} onClick={() => login({ email: loginCredentials.email, password: loginCredentials.password })} />
				<span>Glömt lösenord?</span>
				<span>Privacy policy</span>
				<br />
			</Wrapper>
			<span>Dont have an account? Sign up and get started!</span>
		</>
	)
}

const Wrapper = styled.div`
	width: 500px;
	margin: 0 auto;
	padding: 6%;
	border: 3px solid ${primaryColor};
	border-radius: 5%;
	margin-top: 4%;
	transition: 0.2s;
	&:hover {
		box-shadow: rgb(4 17 29 / 25%) 0px 0px 20px 20px;
		transition: 0.5s;
	}
`

{
	/* 	<h1>forgot password?</h1>
	<input placeholder='email' onChange={(event) => setRecoverAccount(event.target.value)} />
	<button onClick={() => retrieveLostAccount(recoverAccount)}>send recovery</button> */
}
