import { useAuthentication } from 'hooks'

export const LandingPage: React.FC = () => {
	const { validateUserToken } = useAuthentication()
	return <div onClick={() => validateUserToken()}>LandingPage</div>
}
