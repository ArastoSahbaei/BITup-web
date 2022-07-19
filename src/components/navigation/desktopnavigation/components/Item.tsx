import styled from 'styled-components'
import { useAuthentication } from '../../../../hooks'

export const Item = (props: { navigateTo?: string; image: any; text: string }) => {
	const { logout } = useAuthentication()

	const handleClick = () => {
		props.navigateTo ? /* navigateAuth(props.navigateTo) */ console.log('ok') : logout()
	}

	return (
		<List onClick={() => handleClick()}>
			<Icon src={props.image} />
			<Paragraph>{props.text}</Paragraph>
		</List>
	)
}

const Icon = styled.img`
	width: 25px;
	height: 100%;
	vertical-align: middle;
	color: white;
`
const Paragraph = styled.span`
	font-size: 10px;
	vertical-align: middle;
	transition: 300ms;
	margin-left: 20px;
`
const List = styled.li`
	padding: 10%;
	background-color: rgb(251, 253, 255);
	color: rgb(4, 17, 29);
	border-bottom: 1px solid rgb(229, 232, 235);
	&:hover {
		background-color: #f2a900;
		transition: 300ms;
		${Paragraph} {
			margin-left: 28px;
			transition: 300ms;
			font-weight: 800;
		}
	}
`
