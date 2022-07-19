import { Navigation } from './components'
import { Routes } from './routes/Routes'
import { UserProvider } from './shared/providers/UserProvider'

export const App = () => {
	return (
		<>
			<UserProvider>
				<Routes>
					<Navigation />
				</Routes>
			</UserProvider>
		</>
	)
}
