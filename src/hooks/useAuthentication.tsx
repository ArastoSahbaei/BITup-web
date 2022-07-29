import { toast } from 'react-toastify'
import { userRoles } from 'shared/enums'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from 'shared/providers/UserProvider'
import { nonAuthenticatedUser } from 'shared/mock'
import { IcreateAccount, IloginCredentials, IresetPassword } from 'shared/interfaces'
import BitupService from 'shared/api/services/BitupService'
import Path from 'routes/Path'
import { validateToken } from 'functions'

export const useAuthentication = () => {
	const { authenticatedUser, setAuthenticatedUser } = useContext(UserContext)
	const navigate = useNavigate()

	const createAccountAndSendInvite = (newAccount: IcreateAccount) => {
		try {
			BitupService.createAccount(newAccount)
			toast.success('Account created successfully!')
		} catch (error) {
			console.log(error)
			toast.error('Something went wrong!')
		}
	}

	const retrieveLostAccount = async (email: string) => {
		try {
			BitupService.retrieveLostAccount(email)
			toast.success(`Återställningslänk har skickas till ${email}`)
		} catch (error) {
			console.log(error)
			toast.error('Something went wrong!')
		}
	}

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

	const validateUserEmail = async (token: string) => {
		try {
			await BitupService.validateUserEmail(token)
			toast.success('Ditt konto är nu validerat!')
		} catch (error: any) {
			console.log(error)
			toast.error(error.response.data.message || 'Något gick fel!')
		}
	}

	const resetPasswordWithToken = async (newData: IresetPassword) => {
		try {
			const { data } = await BitupService.resetPasswordWithToken(newData)
			setAuthenticatedUser(data)
			navigate(Path.landingPage)
			localStorage.setItem('token', data.token)
			toast.success('Lösenord har uppdaterats!')
			console.log(data)
		} catch (error) {
			console.log(error)
			toast.error('Something went wrong!')
		}
	}

	const logout = () => {
		localStorage.removeItem('token')
		setAuthenticatedUser(nonAuthenticatedUser)
		navigate(Path.landingPage)
	}

	const isUserAdmin = () => {
		return authenticatedUser.role === userRoles.admin
	}

	const validateUserToken = async () => {
		const token = localStorage.getItem('token')
		if (!token) {
			return
		}
		const base64Url = token.split('.')[1]
		const base64 = base64Url.replace('-', '+').replace('_', '/')
		const JWT = JSON.parse(window.atob(base64))
		if (validateToken(JWT.exp)) {
			// TODO: There has to be a better way to recieve the username? You cannot just do a getUserWithID like this?
			// TODO: Sign in with a new token instead of recieving the user with getUserWithID?
			try {
			/* 	const { data } = await CodicAPIService.getUserWithID(JWT.id) */
				// TODO: recieve the authenticatid variable from server so that only data can be set
			/* 	setAuthenticatedUser(data) */
			} catch (error) {
				console.log(error)
			}
		} else {
			setAuthenticatedUser(nonAuthenticatedUser)
			localStorage.removeItem('token')
		}
	}

	return {
		authenticatedUser,
		login,
		logout,
		isUserAdmin,
		validateUserEmail,
		validateUserToken,
		retrieveLostAccount,
		resetPasswordWithToken,
		createAccountAndSendInvite,
	}
}
