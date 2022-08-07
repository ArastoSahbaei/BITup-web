import Path from 'routes/Path'
import styled from 'styled-components'

interface Props {
	redirect?: (path: string) => void
}

export const Header: React.FC<Props> = (props: Props) => {
	const { redirect } = props
	return <Paragraph onClick={() => redirect && redirect(Path.landingPage)}>TransBIT AB</Paragraph>
}

const Paragraph = styled.p`
	text-align: center;
	width: 100%;
	padding: 13%;
	font-weight: 600;
	font-size: 1rem;
	cursor: pointer;
	background-color: orange;
`
