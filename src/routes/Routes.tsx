import { userRoles } from 'shared/enums'
import { useContext } from 'react'
import { UserContext } from 'shared/providers/UserProvider'
import { AdminLandingPage } from 'pages/admin'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { HistoryPage, ProfilePage, InitializePaymentPage } from 'pages/auth'
import { GettingStartedPage, LandingPage, ResetPasswordPage, SignInPage, ValidateUserEmailPage } from 'pages'
import Path from './Path'

export const Routes = (props: { children: JSX.Element }) => {
	const { authenticatedUser } = useContext(UserContext)

	const authenticationRequired = (AuthPage: JSX.Element, FallbackPage?: any) => {
		const fallBack = FallbackPage ? FallbackPage : LandingPage
		return authenticatedUser.authenticated ? AuthPage : fallBack
	}

	const adminRequired = (AdminPage: JSX.Element, FallbackPage?: any) => {
		const fallBack = FallbackPage ? FallbackPage : LandingPage
		const isAuthenticated = authenticatedUser.authenticated
		const isAdmin = authenticatedUser.role === userRoles.admin
		return isAuthenticated && isAdmin ? AdminPage : fallBack
	}

	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route path={Path.landingPage} element={<LandingPage />} />
				<Route path={Path.gettingStartedPage} element={<GettingStartedPage />} />
				<Route path={Path.signInPage} element={<SignInPage />} />
				<Route path={Path.resetPasswordPage} element={<ResetPasswordPage />} />
				<Route path={Path.validateUserEmailPage} element={<ValidateUserEmailPage />} />
				{/* AUTHENTICATED ROUTES */}
				<Route path={Path.auth.profilePage} element={authenticationRequired(<ProfilePage />)} />
				<Route path={Path.auth.historyPage} element={authenticationRequired(<HistoryPage />)} />
				<Route path={Path.auth.startPaymentPage} element={authenticationRequired(<InitializePaymentPage />)} />
				{/* ADMIN ROUTES */}
				<Route path={Path.admin.landingPage} element={adminRequired(<AdminLandingPage />)} />
				{/* DEFAULT ROUTE */}
				<Route path='*' element={<LandingPage />} />
			</Switch>
		</BrowserRouter>
	)
}
