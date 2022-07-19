import { useState } from 'react'
import BitupService from '../shared/api/services/BitupService'

export const SignInPage: React.FC = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const roflmao = async () => {
		try {
			const { data } = await BitupService.login({ email: email, password: password })
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<h1>test</h1>
			<input placeholder='email' onChange={(event) => setEmail(event.target.value)} />
			<input placeholder='password' type='password' onChange={(event) => setPassword(event.target.value)} />
			<button onClick={() => roflmao()}>Logga in</button>
		</div>
	)
}
