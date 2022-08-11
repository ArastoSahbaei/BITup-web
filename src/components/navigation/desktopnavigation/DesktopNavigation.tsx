import { useAuthentication } from 'hooks'
import { useNavigate } from 'react-router-dom'
import { Profile } from './components/Profile'
import { Button } from 'components/common'
import logotype from 'shared/images/png/logotype.png'
import styled from 'styled-components'
import Path from 'routes/Path'

export const DesktopNavigation: React.FC = () => {
	const navigate = useNavigate()
	const { isUserAuthenticated, isUserAdmin } = useAuthentication()

	const nonAuthNav = () => {
		return (
			<>
				<GridCell column='15/16' onClick={() => navigate(Path.signInPage)}>
					Logga in
				</GridCell>
				<GridCell column='17/18' onClick={() => navigate(Path.gettingStartedPage)}>
					<Button text='LÄS MER' />
				</GridCell>
			</>
		)
	}

	const displayUserIfAuthenticated = () => {
		return (
			<GridCell column='17/17'>
				<Profile />
			</GridCell>
		)
	}

	const displayAdminNav = () => {
		return (
			isUserAdmin() && (
				<GridCell column='10/10' onClick={() => navigate(Path.admin.landingPage)}>
					Admin
				</GridCell>
			)
		)
	}

	return (
		<Wrapper>
			<GridCell column='4/4' onClick={() => navigate(Path.landingPage)}>
				<Image src={logotype} alt={'logotype'} />
			</GridCell>
			{displayAdminNav()}
			{isUserAuthenticated() ? displayUserIfAuthenticated() : nonAuthNav()}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: sticky;
	padding: 1.2%;
	display: grid;
	grid-template-columns: repeat(20, 1fr);
	align-items: center;
	box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
`
const GridCell = styled.span<{ column?: string }>`
	font-size: 0.8rem;
	grid-column: ${(props) => props.column};
	cursor: pointer;
`
const Image = styled.img`
	letter-spacing: 0.3rem;
`
