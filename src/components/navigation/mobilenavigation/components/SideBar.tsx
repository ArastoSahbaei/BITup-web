import { useAuthentication } from 'hooks'
import { useNavigate } from 'react-router-dom'
import { Header } from './Header'
import styled from 'styled-components'
import Path from 'routes/Path'

interface Props {
	drawerIsOpen: boolean
	drawerHandler: (handler: boolean) => void
}

export const SideBar = (props: Props) => {
	const navigate = useNavigate()
	const { isUserAuthenticated, logout } = useAuthentication()

	const redirect = (path: string) => {
		props.drawerHandler(false)
		navigate(path)
	}

	const logoutAndRedirect = () => {
		logout()
		navigate(Path.landingPage)
	}

	const notSignedInNav = () => {
		return (
			<>
				<Paragraph onClick={() => redirect(Path.signInPage)}>Logga in</Paragraph>
				<hr />
				<Paragraph onClick={() => redirect(Path.gettingStartedPage)}>Läs mer</Paragraph>
				<hr />
			</>
		)
	}

	const authNav = () => {
		return (
			<>
				<hr />
				<Paragraph onClick={() => redirect(Path.auth.profilePage)}>Profil</Paragraph>
				<hr />
				<Paragraph onClick={() => redirect(Path.auth.startPaymentPage)}>Ny Betalning</Paragraph>
				<hr />
				<Paragraph onClick={() => redirect(Path.auth.historyPage)}>Historik</Paragraph>
				<hr />
				<Paragraph onClick={() => logoutAndRedirect()}>Logout</Paragraph>
				<hr />
			</>
		)
	}
	return (
		<Drawer isOpen={props.drawerIsOpen}>
			<Header redirect={redirect} />
			{isUserAuthenticated() ? authNav() : notSignedInNav()}
		</Drawer>
	)
}

interface values {
	isOpen: boolean
}

const Drawer = styled.nav<values>`
	height: 100%;
	background: white;
	box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	width: 70%;
	max-width: 270px;
	z-index: 200;
	transform: translateX(-100%);
	transition: transform 0.3s ease-in-out;
	transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(100)')};
`

const Paragraph = styled.p`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 10px 30px;
	padding: 8%;
	font-weight: 600;
	font-size: 1rem;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		transition: 0.3s;
		background-color: orange;
		gap: 10px 50px;
	}
`
