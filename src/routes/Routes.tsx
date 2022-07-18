import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { GettingStartedPage, LandingPage, SignInPage } from '../pages'
import Path from './Path'

export const Routes = (props: { children: JSX.Element }) => {
	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route path={Path.landingPage} element={<LandingPage />} />
				<Route path={Path.signInPage} element={<SignInPage />} />
				<Route path={Path.gettingStartedPage} element={<GettingStartedPage />} />
				<Route path='*' element={<LandingPage />} />
			</Switch>
		</BrowserRouter>
	)
}
