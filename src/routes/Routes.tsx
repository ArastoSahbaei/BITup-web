import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { GettingStartedPage, LandingPage, SignInPage } from '../pages'
import { HistoryPage, ProfilePage, StartPaymentPage } from '../pages/auth'
import { UserContext } from '../shared/providers/UserProvider'
import { useContext } from 'react'
import Path from './Path'

export const Routes = (props: { children: JSX.Element }) => {
	const { authenticatedUser } = useContext(UserContext)

	const authenticationRequired = (AuthPage: JSX.Element, FallbackPage: JSX.Element) => {
		return authenticatedUser.authenticated ? AuthPage : FallbackPage
	}

	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route path={Path.landingPage} element={<LandingPage />} />
				<Route path={Path.gettingStartedPage} element={<GettingStartedPage />} />
				<Route path={Path.signInPage} element={<SignInPage />} />
				{/* AUTHENTICATED ROUTES */}
				<Route path={Path.auth.profilePage} element={authenticationRequired(<ProfilePage />, <LandingPage />)} />
				<Route path={Path.auth.historyPage} element={authenticationRequired(<HistoryPage />, <LandingPage />)} />
				<Route path={Path.auth.startPaymentPage} element={authenticationRequired(<StartPaymentPage />, <LandingPage />)} />
				{/* DEFAULT ROUTE */}
				<Route path='*' element={<LandingPage />} />
			</Switch>
		</BrowserRouter>
	)
}
