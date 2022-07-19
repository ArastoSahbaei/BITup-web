import { Routes } from './routes/Routes'
import { Navigation } from './components'
import { UserProvider } from './shared/providers/UserProvider'
import { ToastifyConfigurations } from './shared/configurations'
import { GlobalStyle } from './shared/styles/GlobalStyles'

export const App = () => {
	return (
		<>
			<>
				<GlobalStyle />
				<ToastifyConfigurations />
			</>
			<UserProvider>
				<Routes>
					<Navigation />
				</Routes>
			</UserProvider>
		</>
	)
}
