import styled from 'styled-components'

interface Props {
	drawerIsOpen: boolean
	drawerHandler: (handler: boolean) => void
}

export const SideBar = (props: Props) => {
	return (
		<Drawer isOpen={props.drawerIsOpen}>
			<Paragraph>CompanyName?</Paragraph>
			<hr />
			<Paragraph>Profil</Paragraph>
			<hr />
			<Paragraph>Ny Betalning</Paragraph>
			<hr />
			<Paragraph>Historik</Paragraph>
			<hr />
			<Paragraph>Logout</Paragraph>
			<hr />
		</Drawer>
	)
}

interface values {
	isOpen: boolean
}

const MenuText = styled.p`
	margin: 5px 10px 0px 10px;
	text-align: center;
`

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
	padding: 3%;
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
