import { userRoles } from 'shared/enums'
import { UserContext } from 'shared/providers/UserProvider'
import { validateToken } from 'functions'
import { AdminLandingPage } from 'pages/admin'
import { nonAuthenticatedUser } from 'shared/mock'
import { useContext, useEffect } from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { HistoryPage, ProfilePage, InitializePaymentPage, OnBoardingPage } from 'pages/auth'
import { GettingStartedPage, LandingPage, ResetPasswordPage, SignInPage, ValidateUserEmailPage } from 'pages'
import BitupService from 'shared/api/services/BitupService'
import Path from './Path'

export const Routes = (props: { children: JSX.Element }) => {
	const { authenticatedUser, setAuthenticatedUser } = useContext(UserContext)

	const authRequired = (AuthPage: JSX.Element, FallbackPage?: any) => {
		const fallBack = FallbackPage ? FallbackPage : LandingPage
		return authenticatedUser.authenticated ? AuthPage : fallBack
	}

	const adminRequired = (AdminPage: JSX.Element, FallbackPage?: any) => {
		const fallBack = FallbackPage ? FallbackPage : LandingPage
		const isAuthenticated = authenticatedUser.authenticated
		const isAdmin = authenticatedUser.role === userRoles.admin
		return isAuthenticated && isAdmin ? AdminPage : fallBack
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
			try {
				const { data } = await BitupService.validateToken()
				setAuthenticatedUser(data)
			} catch (error) {
				setAuthenticatedUser(nonAuthenticatedUser)
				localStorage.removeItem('token')
			}
		} else {
			setAuthenticatedUser(nonAuthenticatedUser)
			localStorage.removeItem('token')
		}
	}

	useEffect(() => {
		validateUserToken()
	}, [])

	return (
		<BrowserRouter basename='/BITup-web'>
			{props.children}
			<Switch>
				<Route path={Path.signInPage} element={<SignInPage />} />
				<Route path={Path.landingPage} element={<LandingPage />} />
				<Route path={Path.resetPasswordPage} element={<ResetPasswordPage />} />
				<Route path={Path.gettingStartedPage} element={<GettingStartedPage />} />
				<Route path={Path.validateUserEmailPage} element={<ValidateUserEmailPage />} />
				{/* AUTHENTICATED ROUTES */}
				<Route path={Path.auth.profilePage} element={authRequired(<ProfilePage />)} />
				<Route path={Path.auth.historyPage} element={authRequired(<HistoryPage />)} />
				<Route path={Path.auth.onBoardingPage} element={authRequired(<OnBoardingPage />)} />
				<Route path={Path.auth.startPaymentPage} element={authRequired(<InitializePaymentPage />)} />
				{/* ADMIN ROUTES */}
				<Route path={Path.admin.landingPage} element={adminRequired(<AdminLandingPage />)} />
				{/* DEFAULT ROUTE */}
				<Route path='*' element={<LandingPage />} />
			</Switch>
		</BrowserRouter>
	)
}
