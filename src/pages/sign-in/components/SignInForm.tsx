import { Button, Input } from 'components/common'
import { useState } from 'react'
import { primaryColor } from 'shared/styles/GlobalStyles'
import { useAuthentication } from 'hooks'
import { IloginCredentials } from 'shared/interfaces'
import logotype from 'shared/images/png/logotype.png'
import styled from 'styled-components'

export const SignInForm = () => {
	const { login } = useAuthentication()
	const [loginCredentials, setLoginCredentials] = useState<IloginCredentials>({ email: '', password: '' })

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, target: keyof IloginCredentials) => {
		setLoginCredentials({ ...loginCredentials, [target]: event.target.value })
	}

	return (
		<Wrapper>
			{/* <Image src={logotype} alt='' /> */}
			<Title>Logga in</Title>
			<Input label='Email' onChange={(event: any) => handleChange(event, 'email')} />
			<Input label='Password' type='password' onChange={(event: any) => handleChange(event, 'password')} />
			<PasswordSpan>Glömt lösenord?</PasswordSpan> <br />
			<Button style={{ width: '100%', marginTop: '20px' }} text={'Autentisera'} onClick={() => login({ email: loginCredentials.email, password: loginCredentials.password })} />
			<br />
			<PolicySpan>Läs mer om hur Transbit handskas med din data i vår policy sektion.</PolicySpan>
			<br />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 600px;
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
const Image = styled.img`
	width: 42px;
	margin: 0 auto;
	background-color: red;
`
const Title = styled.span``
const PasswordSpan = styled.span`
	font-size: 0.8rem;
	padding: 2%;
	float: right;
	cursor: pointer;
`
const PolicySpan = styled.span`
	font-size: 0.6rem;
`
