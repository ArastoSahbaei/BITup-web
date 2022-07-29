import { useParams } from 'react-router-dom'
import { useAuthentication } from 'hooks'

export const ValidateUserEmailPage: React.FC = () => {
	const { token } = useParams()
	const { validateUserEmail } = useAuthentication()

	return <div onClick={() => token && validateUserEmail(token)}>ValidateUserEmailPage</div>
}
