import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../shared/providers/UserProvider'
import { IloginCredentials } from '../shared/interfaces'
import BitupService from '../shared/api/services/BitupService'
import Path from '../routes/Path'

export const useAuthentication = () => {
	const { setAuthenticatedUser } = useContext(UserContext)
	const navigate = useNavigate()

	const login = async (credential: IloginCredentials) => {
		try {
			const { data } = await BitupService.login({ email: credential.email, password: credential.password })
			setAuthenticatedUser(data)
			navigate(Path.landingPage)
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	return {
		login,
	}
}
