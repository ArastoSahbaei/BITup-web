import { useAuthentication } from 'hooks'
import { useNavigate } from 'react-router-dom'
import { Profile } from './components/Profile'
import styled from 'styled-components'
import Path from 'routes/Path'

export const DesktopNavigation: React.FC = () => {
	const navigate = useNavigate()
	const { authenticatedUser, isUserAdmin } = useAuthentication()

	const displayUserIfAuthenticated = () => {
		return (
			<GridCell column='14/16' onClick={() => !authenticatedUser.authenticated && navigate(Path.signInPage)}>
				{authenticatedUser.authenticated ? <Profile /> : 'Logga in'}
			</GridCell>
		)
	}

	const displayAdmin = () => {
		return (
			isUserAdmin() && (
				<GridCell column='10/10' onClick={() => navigate(Path.admin.landingPage)}>
					{'Admin'}
				</GridCell>
			)
		)
	}

	return (
		<Wrapper>
			<GridCell column='3/5' onClick={() => navigate(Path.landingPage)}>
				{'logotyp'}
			</GridCell>
			{displayAdmin()}
			{displayUserIfAuthenticated()}
			<GridCell column='17/18' onClick={() => navigate(Path.gettingStartedPage)}>
				{'Kom igång'}
			</GridCell>
		</Wrapper>
	)
}

interface grid {
	column?: string | ''
}

const Wrapper = styled.div`
	position: sticky;
	padding: 1.2%;
	display: grid;
	grid-template-columns: repeat(20, 1fr);
	align-items: center;
	box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
`

const GridCell = styled.span<grid>`
	font-size: 0.8rem;
	grid-column: ${(props) => props.column};
	cursor: pointer;
`

const Logotype = styled.img<grid>`
	cursor: pointer;
	width: 42px;
	height: 42px;
	grid-column: ${(props) => props.column};
`
