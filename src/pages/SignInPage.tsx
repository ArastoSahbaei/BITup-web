import { useState } from 'react'
import { useAuthentication } from '../hooks'
import { IloginCredentials } from '../shared/interfaces'

export const SignInPage: React.FC = () => {
	const [loginCredentials, setLoginCredentials] = useState<IloginCredentials>({ email: '', password: '' })
	const { login } = useAuthentication()

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, target: keyof IloginCredentials) => {
		setLoginCredentials({ ...loginCredentials, [target]: event.target.value })
	}

	return (
		<div>
			<input placeholder='email' onChange={(event) => handleChange(event, 'email')} />
			<input placeholder='password' type='password' onChange={(event) => handleChange(event, 'password')} />
			<button onClick={() => login({ email: loginCredentials.email, password: loginCredentials.password })}>Logga in</button>
		</div>
	)
}
