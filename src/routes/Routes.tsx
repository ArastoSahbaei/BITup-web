import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import { LandingPage } from '../pages'
import Path from './Path'

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={Path.landingPage} element={<LandingPage />} />
				<Route path='*' element={<LandingPage />} />
			</Switch>
		</BrowserRouter>
	)
}
