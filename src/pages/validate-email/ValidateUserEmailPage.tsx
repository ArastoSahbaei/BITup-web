import { useParams } from 'react-router-dom'
import { useAuthentication } from 'hooks'
import { useEffect } from 'react'

export const ValidateUserEmailPage: React.FC = () => {
	const { token } = useParams()
	const { validateUserEmail } = useAuthentication()

	useEffect(() => {
		token && validateUserEmail(token)
	}, [])

	return <div onClick={() => token && validateUserEmail(token)}>ValidateUserEmailPage</div>
}
