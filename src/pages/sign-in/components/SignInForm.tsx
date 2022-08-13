import { Button } from 'components/common'
import { useState } from 'react'
import { primaryColor } from 'shared/styles/GlobalStyles'
import { useAuthentication } from 'hooks'
import { IloginCredentials } from 'shared/interfaces'
import logotype from 'shared/images/png/logotype.png'
import styled from 'styled-components'
import { Formik, Field, Form, ErrorMessage } from 'formik'

export const SignInForm = () => {
	const { login } = useAuthentication()
	const [loginCredentials, setLoginCredentials] = useState<IloginCredentials>({ email: '', password: '' })

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, target: keyof IloginCredentials) => {
		setLoginCredentials({ ...loginCredentials, [target]: event.target.value })
	}

	const onSubmit = () => {
		console.log('idk yet')
	}

	return (
		<Formik
			initialValues={loginCredentials}
			onSubmit={(values: any, { setSubmitting, resetForm }) => {
				onSubmit()
				alert(JSON.stringify(values, null, 2))
				setSubmitting(false)
				/* resetForm() */
			}}>
			{({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
				<Form>
					<Wrapper>
						<Image src={logotype} alt='' />
						<Title>Logga in</Title>
						{/* 	<input onChange={(event) => handleChange(event, 'email')} placeholder='email' type='text' />
						<input onChange={(event) => handleChange(event, 'password')} placeholder='password' type='password' /> */}
						<label htmlFor='email'>email</label>
						<Field name='email' type='text' />
						<ErrorMessage name='email' />
						<label htmlFor='password'>password</label>
						<Field name='password' type='text' />
						<ErrorMessage name='password' />
						<PasswordSpan>Glömt lösenord?</PasswordSpan> <br />
						<Button type='submit' style={{ width: '100%', marginTop: '20px' }} text={'Autentisera'} onClick={() => login({ email: loginCredentials.email, password: loginCredentials.password })} />
						<br />
						<PolicySpan>Läs mer om hur Transbit handskas med din data i vår policy sektion.</PolicySpan>
						<br />
					</Wrapper>
				</Form>
			)}
		</Formik>
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
