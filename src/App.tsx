import { Routes } from './routes/Routes'
import { Navigation } from './components'
import { UserProvider } from './shared/providers/UserProvider'
import { ToastifyConfigurations } from './shared/configurations'

export const App = () => {
	return (
		<>
			<ToastifyConfigurations />
			<UserProvider>
				<Routes>
					<Navigation />
				</Routes>
			</UserProvider>
		</>
	)
}
