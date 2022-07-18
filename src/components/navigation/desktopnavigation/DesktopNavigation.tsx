import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Path from '../../../routes/Path'

export const DesktopNavigation = () => {
	const navigate = useNavigate()

	return (
		<Wrapper>
			<GridCell column='13/14' onClick={() => navigate(Path.landingPage)}>
				{'logotyp'}
			</GridCell>
			<GridCell column='15/16' onClick={() => navigate(Path.signInPage)}>
				{'Logga in'}
			</GridCell>
		</Wrapper>
	)
}

interface grid {
	column?: string | ''
}

const Wrapper = styled.div`
	position: sticky;
	padding: 0.5%;
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
