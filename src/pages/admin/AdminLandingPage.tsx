import { useAuthentication } from '../../hooks'

export const AdminLandingPage: React.FC = () => {
	const { createAccountAndSendInvite } = useAuthentication()

	return (
		<div>
			<h1>1. send invite to new user(register)</h1>
			<button onClick={() => createAccountAndSendInvite()}>send invite</button>
		</div>
	)
}
