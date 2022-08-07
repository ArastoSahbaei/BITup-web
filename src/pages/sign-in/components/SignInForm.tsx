import { Button } from 'components/common'
import { useState } from 'react'
import { primaryColor } from 'shared/styles/GlobalStyles'
import { useAuthentication } from 'hooks'
import { IloginCredentials } from 'shared/interfaces'
import styled from 'styled-components'

export const SignInForm = () => {
	const { login } = useAuthentication()

	const [loginCredentials, setLoginCredentials] = useState<IloginCredentials>({ email: '', password: '' })

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, target: keyof IloginCredentials) => {
		setLoginCredentials({ ...loginCredentials, [target]: event.target.value })
	}

	return (
		<Wrapper>
			<Title>Transbit</Title>
			<input placeholder='email' onChange={(event) => handleChange(event, 'email')} />
			<input placeholder='password' type='password' onChange={(event) => handleChange(event, 'password')} />
			<Button text={'Logga in'} onClick={() => login({ email: loginCredentials.email, password: loginCredentials.password })} />
			<PasswordSpan>Glömt lösenord?</PasswordSpan>
			<br />
			<PolicySpan>Läs mer om hur Transbit handskas med din data i vår policy sektion.</PolicySpan>
			<br />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 500px;
	margin: 0 auto;
	padding: 6%;
	border: 3px solid ${primaryColor};
	background-color: white;
	border-radius: 5%;
	margin-top: 4%;
	transition: 0.2s;
	&:hover {
		box-shadow: rgb(4 17 29 / 25%) 0px 0px 20px 20px;
		transition: 0.5s;
	}
`

const Title = styled.span``

const PasswordSpan = styled.span`
	font-size: 0.5rem;
`
const PolicySpan = styled.span`
	font-size: 0.5rem;
`
