import { useState, createContext } from 'react'
import { IauthenticatedUser } from '../interfaces'
import { nonAuthenticatedUser } from '../mock'

export const UserContext = createContext<any>(null)

export const UserProvider = (props: { children?: JSX.Element }) => {
	const [authenticatedUser, setAuthenticatedUser] = useState<IauthenticatedUser>(nonAuthenticatedUser)
	const { children } = props

	return <UserContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>{children}</UserContext.Provider>
}
