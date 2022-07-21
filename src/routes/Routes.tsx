import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { GettingStartedPage, LandingPage, SignInPage } from '../pages'
import { HistoryPage, ProfilePage, StartPaymentPage } from '../pages/auth'
import { AdminLandingPage } from '../pages/admin'
import { UserContext } from '../shared/providers/UserProvider'
import { useContext } from 'react'
import { userRoles } from '../shared/enums'
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
				{/* AUTHENTICATED ROUTES */}
				<Route path={Path.auth.profilePage} element={authenticationRequired(<ProfilePage />)} />
				<Route path={Path.auth.historyPage} element={authenticationRequired(<HistoryPage />)} />
				<Route path={Path.auth.startPaymentPage} element={authenticationRequired(<StartPaymentPage />)} />
				{/* ADMIN ROUTES */}
				<Route path={Path.admin.landingPage} element={adminRequired(<AdminLandingPage />)} />
				{/* DEFAULT ROUTE */}
				<Route path='*' element={<LandingPage />} />
			</Switch>
		</BrowserRouter>
	)
}
