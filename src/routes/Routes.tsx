import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { LandingPage, SignInPage } from '../pages'
import Path from './Path'

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={Path.landingPage} element={<LandingPage />} />
				<Route path={Path.signInPage} element={<SignInPage />} />
				<Route path='*' element={<LandingPage />} />
			</Switch>
		</BrowserRouter>
	)
}
