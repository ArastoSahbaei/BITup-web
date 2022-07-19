import { useState } from 'react'
import BitupService from '../shared/api/services/BitupService'

interface LoginCredentials {
	email: string
	password: string
}

export const SignInPage: React.FC = () => {
	const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({ email: '', password: '' })

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, target: keyof LoginCredentials) => {
		setLoginCredentials({ ...loginCredentials, [target]: event.target.value })
	}

	const signIn = async () => {
		try {
			const { data } = await BitupService.login({ email: loginCredentials.email, password: loginCredentials.password })
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<h1>test</h1>
			<input placeholder='email' onChange={(event) => handleChange(event, 'email')} />
			<input placeholder='password' type='password' onChange={(event) => handleChange(event, 'password')} />
			<button onClick={() => signIn()}>Logga in</button>
		</div>
	)
}
