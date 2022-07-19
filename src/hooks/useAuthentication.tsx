import { toast } from 'react-toastify'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../shared/providers/UserProvider'
import { IloginCredentials } from '../shared/interfaces'
import BitupService from '../shared/api/services/BitupService'
import Path from '../routes/Path'
import { nonAuthenticatedUser } from '../shared/mock'

export const useAuthentication = () => {
	const { authenticatedUser, setAuthenticatedUser } = useContext(UserContext)
	const navigate = useNavigate()

	const login = async (credential: IloginCredentials) => {
		try {
			const { data } = await BitupService.login({ email: credential.email, password: credential.password })
			setAuthenticatedUser(data)
			navigate(Path.landingPage)
			localStorage.setItem('token', data.token)
			toast.success('Autentisering lyckades!')
			console.log(data)
		} catch (error: any) {
			console.log(error)
			toast.error(error.response.data.message || 'Något gick fel!')
		}
	}

	const logout = () => {
		localStorage.removeItem('token')
		setAuthenticatedUser(nonAuthenticatedUser)
		navigate(Path.landingPage)
	}
	return {
		authenticatedUser,
		login,
		logout,
	}
}
