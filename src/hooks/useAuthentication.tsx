import { useContext } from 'react'
import { UserContext } from '../shared/providers/UserProvider'
import BitupService from '../shared/api/services/BitupService'

export const useAuthentication = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const login = async () => {
		try {
			const { data } = await BitupService.login({ email: '', password: '' })
			setAuthenticatedUser(data)
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	return {
		login,
	}
}
