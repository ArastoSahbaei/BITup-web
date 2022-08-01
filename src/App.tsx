import { Routes } from './routes/Routes'
import { Navigation } from './components'
import { GlobalStyle } from './shared/styles/GlobalStyles'
import { UserProvider } from './shared/providers/UserProvider'
import { ToastifyConfigurations } from './shared/configurations'

export const App = () => {
	return (
		<>
			<>
				<GlobalStyle />
				<ToastifyConfigurations />
			</>
			<UsereeeProvider>
				<Routes>
					<Nadvigation />
				</Routes>
			</UserProvider>
		</>
	)
}
